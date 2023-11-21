import { FC, PropsWithChildren, useEffect, useState, useRef } from "react"
import classes from "./Tooltip.module.css"

interface Props extends PropsWithChildren {
    tooltipPosX: number
    width: number
}

function getTooltipCoordinate(posX: number, width: number, widthDispley: number) {
    if (posX - width / 2 < 0)
        return 0

    if (posX + width / 2 > widthDispley)
        return widthDispley - width

    return posX
}

const Tooltip: FC<Props> = ({ tooltipPosX, children, width }) => {

    const [pos, setPos] = useState(0)

    const ref1 = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setPos(getTooltipCoordinate(tooltipPosX, ref1.current ? ref1.current.offsetWidth : 0, width))
    }, [children])

    return (
        <div className={classes.displayTooltips}>
            <div className={classes.tooltip} style={{ left: pos }}>
                <div ref={ref1}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Tooltip
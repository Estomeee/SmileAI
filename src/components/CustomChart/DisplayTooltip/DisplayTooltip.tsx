import { FC, PropsWithChildren, useEffect, useState, useRef } from "react"
import classes from "./DisplayTooltip.module.css"

interface Props extends PropsWithChildren {
    displayWidth: number,
    tooltipPosX: number
}

 function getTooltipCoordinate(posX: number, width: number, widthDispley: number) {
    if (posX - width / 2 < 0)
        return 0

    if (posX + width / 2 > widthDispley)
        return widthDispley - width

    return posX - width / 2
}

const DisplayTooltip: FC<Props> = ({ displayWidth, tooltipPosX, children }) => {

    const [pos, setPos] = useState(0)

    const ref = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        setPos(getTooltipCoordinate(tooltipPosX, ref.current ? ref.current.offsetWidth : 0, displayWidth))
    }, [children])

    return (
        <div className={classes.displayTooltips} style={{ width: displayWidth }}>
            <div className={classes.tooltip} style={{ left: pos}}>
                <div ref={ref}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default DisplayTooltip
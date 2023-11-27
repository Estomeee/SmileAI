import { FC, PropsWithChildren, useEffect, useState, useRef } from "react"
import classes from "./Tooltip.module.css"

interface Props extends PropsWithChildren {
    tooltipPosX: number
}

function getTooltipCoordinate(posPointLeft: number, posDisplayStart: number, width: number, widthDispley: number) {

    const posPointCetner = posPointLeft - posDisplayStart

    if (posPointCetner - width / 2 < 0)
        return 0

    if (posPointCetner + width / 2 > widthDispley)
        return widthDispley - width

    return posPointCetner - width / 2
}

const Tooltip: FC<Props> = ({ tooltipPosX, children }) => {

    const [pos, setPos] = useState(0)

    const refDisplay = useRef<HTMLHeadingElement>(null);
    const refTooltip = useRef<HTMLHeadingElement>(null);

    useEffect(() => {

        const displayWidth = refTooltip.current?.parentElement?.offsetWidth ? refTooltip.current?.parentElement?.offsetWidth : 0
        const posDispley = refDisplay.current?.getBoundingClientRect() ? refDisplay.current?.getBoundingClientRect().x : 0
        const widthTooltip = refTooltip.current ? refTooltip.current.offsetWidth : 0        
        setPos(getTooltipCoordinate(tooltipPosX, posDispley, widthTooltip, displayWidth))

    }, [children])

    return (
        <div className={classes.displayTooltips} ref={refDisplay}>
            <div className={classes.tooltip} style={{ left: pos }} ref={refTooltip}>
                    {children}
            </div>
        </div>
    )
}

export default Tooltip
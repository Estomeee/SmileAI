import { FC, useState, useRef } from 'react'

import classes from "./Point.module.css"

interface Props {
    setTooltip: any,
    valueX: string,
    valueY: number,
    width: number,
    height: number,
    key: string,
    id: string,
}

const Point: FC<Props> = ({ setTooltip, valueX, valueY, width, height, id }) => {

    const [style, setStyle] = useState(classes.point)
    const ref = useRef<HTMLHeadingElement>(null);

    function hover() {

        setStyle(`${classes.point} ${classes['point_hover']}`)

        const posPointStart = ref.current?.getBoundingClientRect() ? ref.current?.getBoundingClientRect().x : 0
        setTooltip({ ValueX: valueX, ValueY: valueY, PosX: posPointStart + width / 2 })
    }

    function leave() {
        setStyle(classes.point)
    }

    return (
        <div
            ref={ref}
            id={id}
            style={{
                width: width,
                height: height * valueY / 100 > height? height: height * valueY / 100
            }}
            className={style}
            onMouseEnter={hover}
            onMouseLeave={leave} ></div>
    )
}

export default Point
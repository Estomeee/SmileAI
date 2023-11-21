import { FC, PropsWithChildren, useState, useRef } from 'react'

import classes from "./MyChart.module.css"
import { Text } from '@vkontakte/vkui';

import Tooltip from './Tooltip/Tooltip';
import Point from './Point/Point';


interface Props extends PropsWithChildren {
    height: number,
    dataset: { x: string, y: number }[],
}

const MyChart: FC<Props> = ({ height, dataset }) => {
    const [tooltip, setTooltip] = useState({ ValueX: '', ValueY: '', PosX: 0 });
    const ref = useRef<HTMLHeadingElement>(null);

    return (
        <div className={classes.cont} >
            <Tooltip
                tooltipPosX={tooltip.PosX}>
                <Text>{tooltip.ValueY}</Text>
            </Tooltip>

            <div className={classes.chart} ref={ref} style={{height: height}}>
                {dataset.map(point => {
                    return (<Point
                        id={point.x}
                        key={point.x}
                        valueX={point.x}
                        valueY={point.y}
                        setTooltip={setTooltip}
                        width={8}
                        height={75}
                        ></Point>)
                })}
            </div>

            <Tooltip
                tooltipPosX={tooltip.PosX}>
                <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>
                    {tooltip.ValueX}
                </Text>
            </Tooltip>
        </div>
    );
}

export default MyChart
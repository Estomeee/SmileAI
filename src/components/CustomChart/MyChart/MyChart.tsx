import { FC, PropsWithChildren, useState, useRef } from 'react'

import classes from "./MyChart.module.css"
import { Button, ButtonGroup, Text } from '@vkontakte/vkui';

import Tooltip from './Tooltip/Tooltip';
import Point from './Point/Point';
import { IChart } from '../../../api/requests/Statistics.request';
import moment from 'moment';
import 'moment/locale/ru'

moment().locale('ru')

interface Props extends PropsWithChildren {
    height: number,
    dataset: IChart,
}

const MyChart: FC<Props> = ({ height, dataset }) => {
    const [tooltip, setTooltip] = useState({ ValueX: '', ValueY: '', PosX: 0 });
    const ref = useRef<HTMLHeadingElement>(null);
    const [flag, setFlag] = useState<'week' | 'month'>('month')
  
    
    return (
        <div className={classes.cont} >
            <Tooltip
                tooltipPosX={tooltip.PosX}>
                <Text>{tooltip.ValueY}</Text>
            </Tooltip>

            <div className={classes.chart} ref={ref} style={{ height: height }}>
                {

                    dataset[flag].map(point => {
                        return (
                            <Point
                                id={point.date}
                                key={point.date}
                                valueX={moment(point.date).format('DD MMMM YYYY')}
                                valueY={point.y}
                                setTooltip={setTooltip}
                                width={150 / dataset[flag].length}
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

            <ButtonGroup>
                <Button mode='link' disabled={flag == 'week'} onClick={() => setFlag('week')}>Неделя</Button>
                <Button mode='link' disabled={flag == 'month'} onClick={() => setFlag('month')}>Месяц</Button>
            </ButtonGroup>
        </div>
    );
}

export default MyChart
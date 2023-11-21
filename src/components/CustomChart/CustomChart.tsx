import { FC, PropsWithChildren, useState } from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import classes from "./CustomChart.module.css"
import { Text } from '@vkontakte/vkui';

import DisplayTooltip from './DisplayTooltip/DisplayTooltip';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
);

interface Props extends PropsWithChildren {
    width: number,
    height: number,
    datasetX: string[],
    datasetY: number[]
}

const data = {
    labels: [''],
    datasets: [
        {
            label: 'Качесвто Вашей улыбки',
            data: [1],
            backgroundColor: '#2688eb', //Адаптивность цвета?
            borderRadius: 8,
            hoverBackgroundColor: '#ff3347',
            barThickness: 7

        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false
        },
        title: {
            display: false,
        },
        tooltip: {
            enabled: false,
            external: (context: any) => {},
            xAlign: "left" as const,
            yAlign: "top" as const
        }
    },
    scales: {
        x: {
            display: false,
            grid: {
                display: false
            }
        },
        y: {
            display: false,
            grid: {
                display: false
            }
        },
    },
    aspectRatio: 2,
    elements: {
        bar: {
            //inflateAmount: 3,
        },
    }
};

const CustomChart: FC<Props> = ({ width, height, datasetX, datasetY }) => {
    const [tooltip, setTooltip] = useState({ ValueX: '', ValueY: '', PosX: 0 });

    data.labels = datasetX
    data.datasets[0].data = datasetY 

    options.aspectRatio = width / height
    data.datasets[0].barThickness = 7

    options.plugins.tooltip.external = (chart: any) => {
        const element = chart.chart.tooltip.dataPoints[0].element


        setTooltip((prevTooltip) => {
            if (prevTooltip.PosX == element.x) return prevTooltip
            return {
                ValueX: chart.chart.tooltip.dataPoints[0].raw,
                ValueY: chart.chart.tooltip.dataPoints[0].label,
                PosX: element.x
            }
        })

    }


    return (
        <div className={classes.cont} >

            <DisplayTooltip
                displayWidth={width}
                tooltipPosX={tooltip.PosX}>
                <Text>{tooltip.ValueX}</Text>
            </DisplayTooltip>

            <Bar style={{ padding: 0, margin: "auto", display: 'block', width: width }} options={options} data={data} />

            <DisplayTooltip
                displayWidth={width}
                tooltipPosX={tooltip.PosX}>
                <Text style={{ color: 'var(--vkui--color_text_secondary)' }}>
                    {tooltip.ValueY}
                </Text>
            </DisplayTooltip>
        </div>
    );
}

export default CustomChart
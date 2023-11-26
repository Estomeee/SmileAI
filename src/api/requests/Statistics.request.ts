import { createPromiseIs, createPromiseObj } from "../../init"
import instance, { APIPoints } from "../instances/Main.instance"


export interface IStatisticsData {
    date: string,
    y: number
}

export interface IHint {
    id: number
    title: string
    text: string
}


export interface IChart {
    week: IStatisticsData[]
    month: IStatisticsData[]
}

export const getStatisticsData = async (vkID: number, period: "Week" | "Month" = 'Week') => { //type
    return await createPromiseObj<IStatisticsData[]>(
        instance.get('researches/vk/statistic/' + vkID.toString(), {
            params: {
                statistics_period: period
            }
        }))
}


export const getHints = async (vkID: number, limit: number = 5, offset: number = 0) => {
    return await createPromiseObj<IHint[]>(
        instance.get(APIPoints.hints, {
            params: {
                vk_id: vkID
            }
        })
    )
}




//TODO hints, паталогии


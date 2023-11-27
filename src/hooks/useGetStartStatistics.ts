import { useState, useEffect } from 'react'
import { IChart, IHint, IStatisticsData, getHints, getStatisticsData } from '../api/requests/Statistics.request'



//Написать promise с выбросом ошибки

export async function getStartStatistic(vkID: number, onError: () => void) {

    let data: IChart | null = {week: [], month: []}
    const dataAns = await getStatisticsData(vkID)
    const dataMonthAns = await getStatisticsData(vkID, 'Month');
    
    (dataAns.object && dataMonthAns.object) ? data = {week: dataAns.object, month: dataMonthAns.object} : onError()

    let hints: IHint[] = []
    const hintsAns = await getHints(vkID)
    hintsAns.object ? hints = hintsAns.object : onError()


    return { data: data, hints: hints }

}

export const useGetStartStatistics = (vkID: number, onError: () => void) => {

    const [hints, setHints] = useState<IHint[]>([])
    const [statisticsData, setStatisticsData] = useState<IChart>()

    useEffect(() => {
        getStartStatistic(vkID, onError)
            .then(({ data, hints }) => {
                setHints(hints)
                data? setStatisticsData(data) : onError()
            })
            .catch(() => { console.log('her') } // не выдаёт ошибку

            )
    }, [])

    return {hints: hints, data: statisticsData }
}
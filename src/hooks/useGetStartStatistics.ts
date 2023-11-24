import { useState, useEffect } from 'react'
import { IHint, IStatisticsData, getHints, getStatisticsData } from '../api/requests/Statistics.request'



//Написать promise с выбросом ошибки

export async function getStartStatistic(vkID: number, onError: () => void) {

    let data: IStatisticsData[] = []
    const dataAns = await getStatisticsData(vkID)
    dataAns.object ? data = dataAns.object : onError()

    let hints: IHint[] = []
    const hintsAns = await getHints(vkID)
    hintsAns.object ? hints = hintsAns.object : onError()


    return { data: data, hints: hints }

}

export const useGetStartStatistics = (vkID: number, onError: () => void) => {

    const [hints, setHints] = useState<IHint[]>([])
    const [statisticsData, setStatisticsData] = useState<IStatisticsData[]>([])

    useEffect(() => {
        getStartStatistic(vkID, onError)
            .then(({ data, hints }) => {
                setHints(hints)
                setStatisticsData(data)
            })
            .catch(() => { console.log('her') } // не выдаёт ошибку

            )
    }, [])

    return {hints: hints, data: statisticsData }
}
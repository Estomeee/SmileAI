import { useState, useEffect } from 'react'

import { IUserAPI, IUserVK, createUser, getUserApi, getUserBridge } from '../api/requests/User.requests';
import { getBucket } from '../api/requests/Bucket.requets';
import { IProduct } from '../api/requests/Store.requests';
import { IChart, IHint, IStatisticsData, getStatisticsData } from '../api/requests/Statistics.request';
import { getStartStatistic } from './useGetStartStatistics';
import bridge from '@vkontakte/vk-bridge';

//Написать promise с выбросом ошибки




export async function init(onError: () => void) {

    const userVK = await getUserBridge() //не обработана ошибка
   

    // получение телефона (позже)
    let userApi = await getUserApi(userVK.id)
  

    if (userApi.state == 404) {
        if (!(await createUser(userVK))) {
            console.log('Пользователь не создан');
            onError()
        }

        userApi = await getUserApi(userVK.id)
    }

    if (userApi.state != 200) {
        console.log(userApi.state);
        onError()
    }

    // следующий этап это получение корзины
    const bucket = await getBucket(userApi.object ? userApi.object?.curent_cart_id : -1)


    // последний этап - получение данных по зубам ( данные для диаграммы, паталогии, рекомендации )
    const { hints, data } = await getStartStatistic(userVK.id, onError)
   
    
    return {
        user: userApi.object,
        bucket: {
            id: userApi.object? userApi.object.curent_cart_id : -1,
            products: bucket? bucket : []
        },
        userVK: userVK,
        statisticsData: data, hints: hints
    }

}

export const useInit = (onError: () => void) => {

    const [bucket, setBucket] = useState<{ id: number, products: IProduct[] }>({ id: -1, products: [] })
    const [user, setUser] = useState<IUserAPI | null>(null)
    const [userVK, setUserVK] = useState<IUserVK>({ id: -1, name: '', surname: '', img: '' })
    const [statisticsData, setStatisticsData] = useState<IChart>({week: [], month: []})
    const [hints, setHints] = useState<IHint[]>([])

    useEffect(() => {
        init(onError)
            .then(({ user, bucket, userVK, statisticsData, hints }) => {
                setUser(user)
                setBucket((bucket.id && bucket.products) ? bucket : { id: -1, products: [] })
                setUserVK(userVK)
                setStatisticsData(statisticsData)
                setHints(hints)
                bridge.send('VKWebAppInit')
          
            })
            .catch(() => { console.log('her') } // не выдаёт ошибку

            )
    }, [])


    return { user: user, userVK: userVK, bucket: bucket, setBucket: setBucket, data: statisticsData, hints }
}
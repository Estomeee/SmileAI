import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import bridge, { UserInfo } from '@vkontakte/vk-bridge';
import instance from './api/instances/Main.instance';
import { AxiosError, AxiosResponse } from 'axios';
import { createUser, getUserApi, getUserBridge } from './api/requests/User.requests';
import { getBucket } from './api/requests/Bucket.requets';


// init что делает

// проверяет пользователя

export function createPromiseObj<T>(promise: Promise<AxiosResponse<T>>) {
    return promise
        .then(function (response: AxiosResponse<T>) {
            return { state: 200, object: response.data }

        })
        .catch(function (error: AxiosError) {
            return { state: error.response ? error.response.status : 800, object: null }
        })
}

export function createPromiseIs(promise: Promise<any>) {
    return promise
        .then(function (response: AxiosResponse) {
            return true
        })
        .catch(function (error: AxiosError) {
            return false
        })
}




export const init = async () => {
    const userVK = await getUserBridge()
    console.log(userVK);

    // получение телефона (позже)
    let userApi = await getUserApi(userVK.id)
    console.log(userApi);



    if (userApi.state == 404) {
        if (!(await createUser(userVK))) {
            console.log('Пользователь не создан');
            return
        }

        userApi = await getUserApi(userVK.id)
    }

    if (userApi.state != 200) {
        console.log('Неудача');
        return
    }

    console.log('Удача');


    // следующий этап это получение корзины 
    const bucket = await getBucket(userApi.object ? userApi.object?.curent_cart_id : -1) // Как обработать ошибку?


    // последний этап - получение данных по зубам ( данные для диаграммы, паталогии, рекомендации )


    return  [userApi.object&& userApi.object, bucket&& bucket ]
    // получить данные пользователя
    // проверить, есть ли пользователь в базе
    // если есть то получаем данные, если нет - регистрируем 
    //
    //
}


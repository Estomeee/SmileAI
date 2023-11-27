import bridge from "@vkontakte/vk-bridge"
import { createPromiseIs, createPromiseObj } from "../../init"
import instance, { APIPoints } from "../instances/Main.instance"

export interface IUserAPI {
    id: number,
    login?: string,
    vk_id: string,

    name: string,
    surname: string
    patronymic?: string

    telephone?: string,
    email?: string,
    img?: string

    curent_cart_id: number,
    is_active: boolean
}

export interface IUserVK {
    id: number,

    name: string
    surname: string,
    patronymic?: string

    telephone?: string

    img: string
}

export const getUserBridge = async () => {
    const user: IUserVK = await bridge.send('VKWebAppGetUserInfo', {})
        .then((data) => {
            console.log('user');

            return { id: data.id, name: data.first_name, surname: data.last_name, img: data.photo_200 }
        })
        .catch() //выкинуть из приложения с уведомлением об ошибке
    return user
}

export const getUserApi = async (idUser: number) => {
    return await createPromiseObj<IUserAPI>(instance.get(APIPoints.getUser, {
        params: {
            vk_id: idUser
        }
    }))
}

export const createUser = async (user: IUserVK) => {
    return await createPromiseIs(
        instance.post(APIPoints.userCreate, {
            vk_id: user.id.toString(),

            name: user.name,
            surname: user.surname,
            patronymic: user.patronymic ? user.patronymic : '',

            telephone: user.telephone ? user.telephone : '',

            img: user.img ? user.img : ''
        }))
}


export const dentist = async (vkId: number) => {
    instance.post(APIPoints.dentist, {
        client_vk_id: vkId.toString()
    })
    .then(() => {})
    .catch((error) => console.log(error)
    )
}
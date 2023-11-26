import { AxiosError, AxiosResponse } from "axios"
import instance, { APIPoints } from "../instances/Main.instance"

export interface ITariff {
    name: string,
    description: string,
    price: number,
    features: { name: string, description: string }[]
}

export async function getTariffs() {
    return await instance.get(APIPoints.getTariffs)
        .then(function (response: AxiosResponse<ITariff[]>) {
            return response.data
        })
        .catch(function (error: AxiosError) {
            return null
        })
}
import instance, { APIPoints } from "../instances/Main.instance"
import { createPromiseIs, createPromiseObj } from "../../init"
import { IProduct } from "./Store.requests"
import { AxiosError, AxiosResponse } from "axios"

export async function getBucket(idBucket: number) {

    //return await createPromiseObj<IProduct[]>(instance.get(APIPoints.getBucket + idBucket.toString()))

    return await instance.get(APIPoints.getBucket + idBucket.toString())
        .then(function (response: AxiosResponse<IProduct[]>) {
           return response.data
        })
        .catch(function (error: AxiosError) {
            return null
        })
}

//Пока подразумевается, что проблем с корзиной нет?
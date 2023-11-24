import instance, { APIPoints } from "../instances/Main.instance"
import { IProduct } from "./Store.requests"
import { AxiosError, AxiosResponse } from "axios"
import { IUserAPI } from "./User.requests"

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

export async function addToBucket(idBucket: number, idProduct: number, count: number = 1) {
    return await instance.post(APIPoints.addToBucket, {
        cart_id: idBucket,
        product_id: idProduct,
        count: count
    })
        .then(function (response: AxiosResponse<string>) {
            return true
        })
        .catch(function (error: AxiosError) {
            return false
        })
}


export async function removeFromBucket(idBucket: number, idProduct: number) {
    return await instance.post(APIPoints.removeFromBucket, {
        cart_id: idBucket,
        product_id: idProduct,
    })
        .then(function (response: AxiosResponse<string>) {
            return true
        })
        .catch(function (error: AxiosError) {
            return false
        })
}

export async function createNewBucket(idBucket: number) {
    return await instance.post(APIPoints.createNewBucket, {
        client_id: idBucket,
    
    })
        .then(function (response: AxiosResponse<IUserAPI>) {
            return response.data
        })
        .catch(function (error: AxiosError) {
            return null
        })
}

//отрефакторить повторяющиеся элементы!
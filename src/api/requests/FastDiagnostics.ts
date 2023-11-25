import { AxiosError, AxiosResponse } from "axios"
import { createPromiseIs, createPromiseObj } from "../../init"
import instance, { APIPoints } from "../instances/Main.instance"


export interface IResultDiagnostics {
    tooths: { [name: string]: string },
    jaw: {
        tooth_count: number,
        percentage: number
    }
}


export const diagnostics = async (apiID: number, file: File | null, name: string | null) => {

    if (!file && !name) return null

    const idDiag = await instance.post(APIPoints.createDiagnostics + apiID.toString())
        .then(function (response: AxiosResponse<{ id: number }>) {
            return response.data
        })
        .catch(function (error: AxiosError) {
            console.log(error);

            return { id: -1 }
        })

    console.log(idDiag);

    if (idDiag.id == -1) return null

    const res = await instance.post(APIPoints.sendFormDiagnosics + idDiag.id.toString(),
        {
            file: file
        }, {
        params: {
            photo_type: name
        },
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
        .then(function (response: AxiosResponse<IResultDiagnostics>) {
            return response.data
        })
        .catch(function (error: AxiosError) {
            console.log(error);

            return null
        })

    return res
}



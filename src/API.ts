import axios from "axios"
import type { dinosaur, IStrapiResponse } from "./Types"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstanse = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer $(API_KEY)`,

    },
})
const getDinosaur = async (): Promise<IStrapiResponse<dinosaur[]>> =>  {
    const res = await apiInstanse.get<IStrapiResponse<dinosaur[]>> ("/dinosaurs", )
    
    return res.data
}
export const api = { getDinosaur }
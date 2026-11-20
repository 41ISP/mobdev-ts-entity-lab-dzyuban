import axios from "axios"
import type { Dinosaur, IStrapiResponse } from "./Types"

export const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export const apiInstanse = axios.create({
    baseURL: API_URL + "/api",
    headers: {
        Authorization: `Bearer ${API_KEY}`,

    },
})
const getDinosaur = async (): Promise<IStrapiResponse<Dinosaur[]>> =>  {
    const res = await apiInstanse.get<IStrapiResponse<Dinosaur[]>> ("/dinosaurs?populate=*", )
    
    return res.data
}
export const api = { getDinosaur }
import { create } from "zustand"
import type { Dinosaur, IStrapiResponse } from "../Types"
import { api } from "../API"

interface DinoStorage {
    Dinos: IStrapiResponse<Dinosaur[]> | undefined
    getDinosaur: () => void
}

export const DinoStore = create<DinoStorage>((set) => ({
    Dinos: undefined,
    getDinosaur: async () => {
        try {
            const res = await api.getDinosaur()
            set({Dinos: res})
        } catch (error) {
            console.error(error)
        }
    }
})) 
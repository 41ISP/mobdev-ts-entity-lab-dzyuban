import { create } from "zustand"
import type { dinosaur, IStrapiResponse } from "../Types"
import { api } from "../API"

interface DinoStorage {
    Dinos: IStrapiResponse<dinosaur[]> | undefined
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
import { useEffect, useState } from "react"
import type { Dinosaur, InputDinosaur, IStrapiResponse } from "../Types"
import type { period } from "../Types"
import { PERIOD, PERIOD_LABELS } from "../Types"

const initialDino: InputDinosaur = {
    type: "",
    family: "",
    weightinKg: 0,
    lengthInMetters: 0,
    ageMillionsYears: 0,
    period: "Triassic"
}


export function EntityForm() {

    const [form, setForm] = useState<InputDinosaur>(initialDino)
    const onChange = <K extends keyof InputDinosaur>(
        key: K,
        value: InputDinosaur[K]
    ) => {
        setForm((o) => ({ ...o, [key]: value }))
    }



    const [dinos, setDinos] = useState<Dinosaur[]>([])


    useEffect(() => {

        fetch("http://localhost:1337/api/dinosaurs")
            .then(res => res.json())
            .then((data: IStrapiResponse<Dinosaur[]>) => {
                setDinos(data.data)
            })
            .catch(err => console.error("Ошибка загрузки:", err))
    }, [])
    const loadDinos = () => {
        fetch("http://localhost:1337/api/dinosaurs")
            .then(res => res.json())
            .then((data: IStrapiResponse<Dinosaur[]>) => setDinos(data.data || []))
            .catch(err => console.error("Ошибка загрузки:", err))
    }
    useEffect(() => {
        loadDinos()
    }, [])

    return (
        <>
            <form className="form">
                <h2>Добавить сущность</h2>

                <label className="field">
                    Тип
                    <input
                        onChange={(e) => onChange("type", e.target.value)}
                    />
                </label>

                <label className="field">
                    Семейство
                    <input
                        onChange={(e) => onChange("family", e.target.value)}
                    />
                </label>

                <label className="field">
                    Вес (целое число)
                    <input
                        type="number"
                        min={0}
                        step={1}
                        value={form.weightinKg}
                        onChange={(e) => onChange("weightinKg", Number(e.target.value))}
                    />
                </label>

                <label className="field">
                    Длина (с плавающей точкой)
                    <input
                        type="number"
                        min={0}
                        step={0.01}
                        value={form.lengthInMetters}
                        onChange={(e) => onChange("lengthInMetters", Number(e.target.value))}
                    />
                </label>

                <label className="field">
                    <span>Возраст (целое число)</span>
                    <input
                        min={0}
                        step={1}
                        value={form.ageMillionsYears}
                        onChange={(e) => onChange("ageMillionsYears", Number(e.target.value))}
                    />
                </label>


                <label className="field">
                    Период
                    <select
                        value={form.period}
                        onChange={(e) => onChange("period", e.target.value as period)}
                    >
                        {PERIOD.map((p) => (
                            <option key={p} value={p}>
                                {PERIOD_LABELS[p]}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
            <div className="list">
                {dinos.length === 0 ? (
                    <p>Полка пуста. Добавьте первую сущность через форму.</p>
                ) : (
                    dinos.map((dino) => (
                        <div key={dino.id} className="card">
                            <h3>{dino.type}</h3>
                            <p>Семейство: {dino.family}</p>
                            <p>Вес: {dino.weightinKg} кг</p>
                            <p>Длина: {dino.lengthInMetters} м</p>
                            <p>Возраст: {dino.ageMillionsYears} млн лет</p>
                            <p>Период: {dino.period}</p>
                        </div>
                    ))
                )}
            </div>
        </>
    )


}

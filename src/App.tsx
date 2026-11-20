import { EntityCard } from "./components/EntityCard"
import { EntityForm } from "./components/EntityForm"
import "./App.css"
import { useEffect, useState } from "react"
import { DinoStore } from "./store/DinoStore"

export default function App() {
    const {Dinos, getDinosaur} = DinoStore()
    const [error, setIsError] = useState<string | null>(null)
    const [loading, setIsLoading] = useState<boolean>(false)

      useEffect(() => {
    const load = async () => {
      setIsLoading(true)
      setIsError(null)
      try {
        await getDinosaur()          
      } catch (error) {
        console.error(error)
        setIsError("Что то не так")
      } finally {
        setIsLoading(false)
      }
    }
    load()
  }, [])

    useEffect(() => {
    console.log(Dinos)
  }, [Dinos])
    

    return (
        <div className="layout">
            <header className="top">
                <h1>Мои сущности</h1>
                        {Dinos?.meta && (
          <span className="pill">{Dinos.meta.pagination.total} в коллекции</span>
        )}
            </header>

            <aside>
                <EntityForm />
            </aside>

            <main>
                {error && <p className="error">Ошибка: {error}</p>}
                {loading && <p className="hint">Загружаем сущности…</p>}
                        {!loading && !error && Dinos?.data && Dinos.data.length > 0 ? (
          <div className="grid">
            {Dinos.data.map((el) => (
              <EntityCard key={el.id} {...el} />
            ))}
          </div>
        ) : (
          <p className="hint">Полка пуста. Добавьте первую сущность через форму.</p>
        )}
      </main>
    </div>
  )
}


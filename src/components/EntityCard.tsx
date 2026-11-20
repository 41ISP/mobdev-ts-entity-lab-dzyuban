import { API_URL } from "../API"
import type { Dinosaur } from "../Types"

interface IEntityCard extends Dinosaur {}

export function EntityCard({
    type,
    description,
    family,
    weightinKg,
    lengthInMetters,
    ageMillionsYears,
    period,
    photo,
}: IEntityCard) {
    return (
        <article className="card">
            <div className="card__cover">
                {photo ? (
                    <img
                        src={API_URL + photo[0].url}
                        alt={photo[0].alternativeText}
                    />
                ) : (
                    <span>{type[0]}</span>
                )}
            </div>

            <div className="card__body">
                <h3>{type}</h3>

                {family && <p className="card__meta">{family}</p>}
                {ageMillionsYears && <p className="card__meta">{ageMillionsYears} млн лет</p>}

                {description && (
                    <p className="card__desc">{description}</p>
                )}

                {period && (
                    <div className="chips">
                        <span className="chip">{period}</span>
                    </div>
                )}
            </div>

            <footer className="card__footer">
                {weightinKg && <strong>{weightinKg} кг</strong>}
                {lengthInMetters && <strong>{lengthInMetters} м</strong>}

                <button className="link-btn">Удалить</button>
            </footer>
        </article>
    )
}
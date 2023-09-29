export default function Card({card}){
    return (
        <li className="card">
            {console.log(card)}
            <div className="card__title-block">
                <h2 className="card__title">{card.name}</h2>
                <img className={`card__img ${!card?.employer?.logo_urls?.original ? "card__img_unvisible" : null}`} src={card?.employer?.logo_urls?.original} alt={card?.employer?.name}/>
                <button className="card__button">Respond</button>
            </div>
            <div className="card__info-block">
                <p className="card__arg-title">Form<span className="card__arg">{card?.employment?.name}</span></p>
                <p className="card__arg-title">Company<span className="card__arg">{card?.employer?.name}</span></p>
                <p className="card__arg-title">Address<span className="card__arg">{card?.area?.name}</span></p>
            </div>
            <div className="card__text">{card?.snippet?.requirement}{card?.snippet?.responsibility}</div>
        </li>
    )
}
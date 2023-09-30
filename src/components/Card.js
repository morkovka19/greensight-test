import { useState } from 'react';
import ArrorIcon from '../images/chevronDownBlue.svg';

export default function Card({card}){

    const [moreDitails, setMore] = useState(false);

    const handleMoreDitails = () =>{
        setMore(!moreDitails);
    }

    return (
        <li className={`card ${moreDitails ? 'card_big': null}`}>
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
            <h3 className='card__text-title'>Требования</h3>
            <ul className={`card__text ${moreDitails ? 'card__text_big' : null}`}>
                {
                    card?.snippet?.requirement.split('. ').map((text, i) => (
                        <li className='card__paaragragh' key={i}>{text}</li>
                    ))
                }
                <div className={`card__bottom  ${moreDitails ? 'card__bottom_unvisible' : null}`}></div>
            </ul>
            <button className="card__button-more" onClick={handleMoreDitails}>{moreDitails ? 'Less ditails' : 'More details'}<img src={ArrorIcon} alt="стрелочка" className={`card__icon ${ moreDitails ? 'card__icon_rotate' : null}`}/></button>
        </li>
    )
}
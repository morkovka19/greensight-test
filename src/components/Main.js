/* eslint-disable react-hooks/rules-of-hooks */
import Search from "./Search";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Main({vacancies}){

    const [countCards, setCountCards] = useState(5);
    const cards = vacancies;
    const [activeCards, setActiveCards] = useState(cards);
    


    const handleClickShowMore = () =>{
        if (activeCards.length - 5 <= 0){
            setCountCards(activeCards.length);
        }
        else{
            setCountCards(countCards + 5);
        }
    }

    const handleSearch = ({form, position}) =>{
        console.log({form, position});
        const activeCardsFilter = cards.filter((item) =>{
            if (form !== 'No selected' || position !== 'No selected'){
                if (position === 'No selected'){
                return item.employment?.name === form && item;
                } else if (form === 'No selected'){
                    return item.area?.name === position && item;
                } else{
                    return (item.area?.name === position && item.employment?.name === form) ? item : null;
                }
            } else{
                return item;
            }
        });
        console.log(activeCardsFilter)
        setActiveCards(activeCardsFilter);
        console.log(activeCards);
    }



    return(
        <main className="main">
            <h1 className="main__title">List of vacancies</h1>
            <Search onSearch={handleSearch}/>
            <ul className="main__list">
                {activeCards?.map((item, i) => (
                    (i < countCards) ? <Card card={item} key ={i} />  : null)
                )}
            </ul>
            <button type="button" className={`main__button  ${countCards === activeCards.length || activeCards.length === 0 ? "main__button_unvisible" : null}`} onClick={handleClickShowMore}>Show more</button>
        </main>
    )
}
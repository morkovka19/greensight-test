/* eslint-disable react-hooks/rules-of-hooks */
import Search from "./Search";
import Card from "./Card";
import { useEffect, useState } from "react";

export default function Main({vacancies}){
    const [countCards, setCountCards] = useState(5);
    const [activeCards, setActiveCards] = useState(vacancies);

    useEffect(() =>{
        setActiveCards(vacancies);
    }, [vacancies]);
    
    const handleClickShowMore = () =>{
        if (activeCards.length - countCards <= 0){
            setCountCards(activeCards.length);
        }
        else{
            setCountCards(countCards + 5);
        }
    };

    function  handleSearch ({form, position}) {
        let activeCardsFilter = [...vacancies].filter((item) =>{
            if (form !== 'Not selected' || position !== 'Not selected'){
                if (position === 'Not selected'){
                return item.employment?.name === form && item;
                } else if (form === 'Not selected'){
                    return item.area?.name === position && item;
                } else{
                    return (item.area?.name === position && item.employment?.name === form) ? item : null;
                }
            } else{
                return item;
            }
        });
        setActiveCards(activeCardsFilter);
        setCountCards(5);
    };

    return (
        <main className="main">
            <h1 className="main__title">List of vacancies</h1>
            <Search onSearch={handleSearch}/>
            <ul className="main__list">
                {activeCards?.map((item, i) => (
                    (i < countCards) ? <Card card={item} key ={i} />  : null)
                )}
            </ul>
            <button type="button" className={`main__button  ${countCards === activeCards.length  || activeCards.length === 0 ? "main__button_unvisible" : null}`} onClick={handleClickShowMore}>Show more</button>
        </main>
    )
}
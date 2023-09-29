import Search from "./Search";
import Card from "./Card";
import { useState } from "react";

export default function Main({vacancies}){

    const [countCards, setCountCArds] = useState(5);



    return(
        <main className="main">
            <h1 className="main__title">List of vacancies</h1>
            <Search />
            <ul className="main__list">
                {vacancies?.map((item, i) => (
                    (i < countCards) ? <Card card={item} key ={i} />  : null)
                )}
            </ul>
        </main>
    )
}
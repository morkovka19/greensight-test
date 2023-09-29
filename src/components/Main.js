import Search from "./Search";
import Card from "./Card";

export default function Main({vacancies, getVacancy}){
    return(
        <main className="main">
            <h1 className="main__title">List of vacancies</h1>
            <Search />
            <ul className="main__list">
                {vacancies?.map((item, i) => (
                    <Card key={i} card={item} getVacancy={getVacancy}/>
                ))}
            </ul>
        </main>
    )
}
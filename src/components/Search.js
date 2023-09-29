export default function Search(){




    return (
        <form className="search">
            <fieldset className="search__fieldset">
                <div className="search__input-block">
                    <label className="search__label" for="form">Form</label>
                    <select className="search__select search__select_no-selected"  id="form">
                        <option className="search__option search__option_unvisible ">Not selected</option>
                        <option className="search__option" value="Full time">Full time</option>
                        <option className="search__option" value="Half time">Half time</option>
                        <option className="search__option" value="Part time">Part time</option>
                    </select>
                </div>
                <div className="search__input-block">
                    <label className="search__label" for="position">Position</label>
                    <select className="search__select search__select_no-selected" id="position">
                    <option className="search__select_no-selected">Not selected</option>
                    </select>
                </div>
            </fieldset>
            <button className="search__button" type="button">Search</button>
        </form>
    )
}
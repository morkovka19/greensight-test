import { useState } from "react";
import ArrowIcon from '../images/chevronDown.svg';
import CloseImage from '../images/close.svg';

export default function Search({onSearch}){

    const [form, setForm] = useState('No selected');
    const [position, setPosition] = useState('No selected');
    const [formOpen, setFormOpen] = useState(false);
    const [positionOpen, setPositionOpen] = useState(false)

    const handleClickForm = (e)=>{
        e.preventDefault();
        setFormOpen(!formOpen);
    }

    const handleClickPosition = (e)=>{
        e.preventDefault();
        setPositionOpen(!positionOpen);
    }

    const handlePositionValue = (value)=>{
        setPosition(value);
        setPositionOpen(false);
    }

    const handleFormValue = (value)=>{
        setForm(value);
        setFormOpen(false);
    }

    const handleClearFilter = (e) =>{
        e.preventDefault();
        setForm('No selected');
        setPosition('No selected');
        onSearch({form: 'No selected', position: 'No selected'})
    }

    const handleSearch = (e) =>{
        e.preventDefault();
        onSearch({ form, position })
    }

    return (
        <form className="search" typeof="submit">
            <div className="search__fieldset">
                <div className="search__input-block">
                    <label className="search__label">Form</label>
                    <div onClick={handleClickForm} className={`search__select ${form === 'No selected' ? 'search__select_no-selected' : null}`}>{form}<img src={ArrowIcon} alt="стрелочка" className={`search__icon ${formOpen ? 'search__icon_rotate' : null}`}/></div>
                    <div className={`search__options ${!formOpen ? "search__options_unvisible" : null}`}>
                        <div className="search__option" onClick={() => handleFormValue("Полная занятость")}>Полная занятость</div>
                        <div className="search__option" onClick={() => handleFormValue("Частичная занятость")}>Частичная занятость</div>
                    </div>
                </div>
                <div className="search__input-block">
                    <label className="search__label">Position</label>
                    <div onClick={handleClickPosition} className={`search__select ${position === 'No selected' ? 'search__select_no-selected' : null}`}>{position}<img src={ArrowIcon} alt="стрелочка" className={`search__icon ${positionOpen ? 'search__icon_rotate' : null}`}/></div>
                    <div className={`search__options ${!positionOpen ? "search__options_unvisible" : null}`}>
                        <div className="search__option" onClick={() => handlePositionValue("Москва")}>Москва</div>
                        <div className="search__option" onClick={() => handlePositionValue("Тверь")}>Тверь</div>
                        <div className="search__option" onClick={() => handlePositionValue("Казань")}>Казань</div>
                    </div>
                </div>
            </div>
            <button className="search__button" type="submit" onClick={handleSearch}>Search</button>
            <button onClick={handleClearFilter} className={`search__button-clear ${form !== 'No selected' || position !== 'No selected' ? 'search__button-clear_visible' : null}`}><img src={CloseImage} alt='крестик' className="search__icon"/> Clear filters</button>
        </form>
    )
}
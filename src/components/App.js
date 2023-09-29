import React, { useEffect, useState} from 'react';
import api from '../utils/api';
import Footer from './Footer';
import Main from './Main';


function App() {

  const [vacancies, setVacancies] = useState([]);

  useEffect(() =>{
    api.getVacancies().then((items) =>{
     setVacancies(items.items)
    }).catch(e => console.log(e));
  });

  const getVacancy =({idCard})=>{
    api.getVacancy({idCard}).then(res => res).catch(e => console.log(e))
  }


  return (
    <div className='page__content'>
      <Main vacancies={vacancies} getVacancy={getVacancy}/>
      <Footer />
    </div>
  );
}

export default App;

import React, { useEffect, useState} from 'react';
import api from '../utils/api';


function App() {

  const [vacancies, setVacancies] = useState([]);

  useEffect(() =>{
    api.getVacancies().then((items) =>{
      setVacancies(items.items);
    }).catch(e => console.log(e));
  });


  return (
    <div>app</div>
  );
}

export default App;

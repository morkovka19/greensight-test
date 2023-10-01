import { url } from "../constants";

class Api{
    getVacancies(){
        return fetch(url).then((res) => this._getResponseDate(res));
    };

   _getResponseDate(res){
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      }
}

const api = new Api();
export default api;

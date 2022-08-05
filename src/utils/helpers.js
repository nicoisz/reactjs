import { URL } from './const';
import heart from "../images/icons/iconmonstr-favorite-2_4@3x.png";
import fillHeart from "../images/icons/iconmonstr-favorite-3_2@3x.png";

export const url = (page, query) => `${URL}?query=${query}&page=${page}`;

export const defineIfIsFavourite = (postID) => {

    let favourites = JSON.parse(localStorage.getItem('myFav')) || [];
    const resp = favourites.filter((value) => value.objectID === postID);
    if (resp.length) {
        return fillHeart;
    }
    return heart;
}

export const defineIfExistsFavourite = (postID) => {

    let favourites = JSON.parse(localStorage.getItem('myFav')) || [];
    const resp = favourites.filter((value) => value.objectID === postID);
    if (resp.length) {
        return true;
    }
    return false;
}

export const getQueryValue = () => {
    let queryText = localStorage.getItem('filter') || 'Angular';
    let queryValue;
    switch (queryText) {
        case 'Angular':
            queryValue = 1
            break;
        case 'Reactjs':
            queryValue = 2
            break;
        case 'Vuejs':
            queryValue = 3
            break;
    }
    return queryValue;

}

export const removeDuplicated = (fav) => {
    return fav.filter((obj, pos, arr) => {
        return arr
          .map(mapObj => mapObj.objectID)
          .indexOf(obj.objectID) == pos;
      });
}
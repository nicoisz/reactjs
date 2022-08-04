import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { url } from '../utils/helpers';
import { defineIfIsFavourite,defineIfExistsFavourite } from '../utils/helpers';

export const DataContext = React.createContext();

export const DataProvider = ({children}) => {
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState(localStorage.getItem('filter') || '');
  const [posts, setPosts] = useState([]);
  const [settings, setSettings] = useState('');
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('myFav')) || []);

  const handlerPagination = useCallback((action) => {
    setPage((prev) => prev + action)
  }, []);

  const handleQuery = useCallback(({text}) => {
    localStorage.setItem('filter', text);
    setQuery(text);
  }, []);

  const handleFavourite = useCallback(async (post) => {
    console.log("favourite exist", defineIfExistsFavourite(post.objectID))
    if(!defineIfExistsFavourite(post.objectID)){
      setFav(fav.push(post));
      localStorage.setItem('myFav', JSON.stringify([...fav, post]));
    }
  }, []);

  // const handleFavourite = useCallback(async (post) => {
  //   let newFav = [];
  //   if(!defineIfExistsFavourite(post.objectID)){
  //     newFav = [...fav, post]; //todo guardar  arreglo + nuevo post 
  //     newFav.push(post); 
  //   } else {
  //     newFav = fav.filter((value) => value.objectID !== post.objectID )
  //   }
  //   console.log("newfav", newFav)
  //   setFav(newFav);
  //   localStorage.setItem('myFav', JSON.stringify(newFav));
  // }, []);

  const fetchData = async () => {
    try {
      const { data: { hits, ...opt } } = await axios.get(url(page, query));
      if (opt) {
        setSettings(opt);
      }
      setPosts(hits);
    } catch {
      throw 'slkdfhsf'
    }
  }

  useEffect(() => {
    fetchData();
  }, [page, query]);

  const value = {
    page,
    posts,
    query,
    settings,
    fav,
    handlerPagination,
    handleQuery,
    handleFavourite,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
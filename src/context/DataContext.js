import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { getQuery, url } from "../utils/helpers";
import {
  defineIfIsFavourite,
  defineIfExistsFavourite,
  getQueryValue,
} from "../utils/helpers";

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  //useState
  const [page, setPage] = useState(0);
  const [query, setQuery] = useState(
    localStorage.getItem("filter") || "Angular"
  );
  const [queryValue, setQueryValue] = useState(
    getQueryValue(localStorage.getItem("filter") || "")
  );
  const [posts, setPosts] = useState([]);
  const [settings, setSettings] = useState("");
  const [fav, setFav] = useState(
    JSON.parse(localStorage.getItem("myFav")) || []
  );
  const [showFavPages, setShowFavPage] = useState(false);

  //custom Handlers
  const handlerPagination = useCallback((action) => {
    setPage(action);
  }, []);

  const handleQuery = useCallback(({ text }) => {
    localStorage.setItem("filter", text);
    setQuery(text);
    setQueryValue(getQueryValue(text));
  }, []);

  const handleFavourite = useCallback(async (post, query) => {

    //no inserta duplicados
    const data = fav.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj.objectID).indexOf(obj.objectID) == pos;
    });


    if (!defineIfExistsFavourite(post.objectID)) {

      post._tags.push(query);
      const oldFav = JSON.parse(localStorage.getItem("myFav"));
      const newFav = [...oldFav, post];
      setFav(newFav); //fav.push(post))
      localStorage.setItem("myFav", JSON.stringify(newFav));

    } else {
      const oldFav = JSON.parse(localStorage.getItem("myFav"));
      const newFav = oldFav.filter((value) => value.objectID !== post.objectID);
      setFav(newFav);
      localStorage.setItem("myFav", JSON.stringify(newFav));
    }
  }, []);

  const handleFavPage = useCallback((showValue) => {
    setShowFavPage(showValue);
  }, []);

  const fetchData = async () => {

    try {
      const {
        data: { hits, ...opt },
      } = await axios.get(url(page, query));

      if (opt) {

        setSettings(opt);
      }
      setPosts(hits);
    } catch {
      throw "error";
    }
  };

  useEffect(() => {
    fetchData();
  }, [page, query]);

  const value = {
    showFavPages,
    page,
    posts,
    query,
    settings,
    fav,
    queryValue,
    handlerPagination,
    handleQuery,
    handleFavourite,
    handleFavPage,
  };

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

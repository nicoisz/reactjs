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
    console.log(action)
    setPage(action);
  }, []);

  const handleQuery = useCallback(({ text }) => {
    localStorage.setItem("filter", text);
    setQuery(text);
    setQueryValue(getQueryValue(text));
  }, []);

  const handleFavourite = useCallback(async (post,query) => {
    console.log("push query", query,queryValue)
    post._tags.push(query);
    const data = fav.filter((obj, pos, arr) => {
      return arr.map((mapObj) => mapObj.objectID).indexOf(obj.objectID) == pos;
    });
    console.log(
      data.forEach((element) => {
        console.log("data", element.objectID);
      })
    );

    if (!defineIfExistsFavourite(post.objectID)) {
      console.log("[DC] handleFavourite if", [...data, post], fav.push(post));
      const newFav = [...data, post];
      console.log("newFav", newFav);
      setFav(newFav); //fav.push(post));
      console.log("newFav", newFav, [...data, post]);
      localStorage.setItem("myFav", JSON.stringify(newFav));
    } else {
      const newFav = data.filter((value) => value.objectID !== post.objectID);
      console.log(
        newFav.forEach((ele) => {
          console.log("remover", ele.objectID);
        })
      );

      console.log("newfav", newFav);
      setFav(newFav);
      //localStorage.removeItem('myFav');

      localStorage.setItem("myFav", JSON.stringify(newFav));
      //localStorage.setItem(JSON.stringify([...fav, post]));
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

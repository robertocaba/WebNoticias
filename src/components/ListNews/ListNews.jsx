import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './ListNews.css'

const ListNews = () => {
  const { listNews, getCharacters } = useContext(GlobalContext);
  useEffect(() => {
    getCharacters();
  }, []);
  const listNew = listNews.map((listNew) => {
    return (
      <div className="listNew" key={listNew.id}>
        <h1>{listNew.Name}</h1>
        <img src={listNew.image} />
      </div>
    );
  });
  return <div className="listNews">{listNew}</div>;
};

export default ListNews;
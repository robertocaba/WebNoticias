import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalState";
import './ListNews.css'

const ListNews = () => {
  const { listNews, getCharacters } = useContext(GlobalContext);
  useEffect(() => {
    getCharacters();
  }, []);
  console.log(listNews)
  const listNew = listNews.map((listNew) => {
   return (
     <div className="listNew" key={listNew._id}>
       <h1>{listNew.title}</h1>
       <img src={listNew.multimedia[0].url}/>
       <h2>{listNew.abstract} </h2>
     </div>
   );
  });
  return <div className="listNews">{listNew}</div>;
};

export default ListNews;
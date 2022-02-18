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
       <h1>{listNew.abstract}</h1>
       <h2>{listNew.lead_paragraph} </h2>
     </div>
   );
  });
  return <div className="listNews">{listNew}</div>;
};

export default ListNews;
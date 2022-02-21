import React from 'react'
import './Card.css'

const Card = () => {

 const guardar = JSON.parse(localStorage.getItem('myform'))

  console.log(guardar);
  const listaArticulo = guardar.map((elemento,idx)=> (
    <div className='listArtis' key={idx}>
      <div className='listArti'>

         <h1> {elemento.Name}  </h1> 

         <p> {elemento.articulo} </p>
      </div>
    </div>
  ))

    return (
 
      <p>{listaArticulo}</p>

    )
  
}

export default Card;
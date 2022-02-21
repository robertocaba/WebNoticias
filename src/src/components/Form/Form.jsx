import React, { useState } from "react";
import './Form.css'
import { useNavigate } from "react-router-dom";


const Form = () => {
   let navigate = useNavigate();

  const [data, setData] = useState({
    Name: "",
    articulo: "",
  });
  const handleInputChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
   
    let dataBase = JSON.parse(localStorage.getItem('myform')) || [];
    const information = {...data}

     dataBase.push(information)
    localStorage.setItem('myform', JSON.stringify(dataBase));

    setTimeout(() => {
        navigate('/')
    }, 1000);
  };


  return (
      <div className="container">
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        onChange={handleInputChange}
       // value={data.Name}
        name="Name"
      />
      <input
        type="text"
        placeholder="articulo"
        onChange={handleInputChange}
        name="articulo"
       // value={data.articulo}
      />
      <button type="submit">Enviar</button>
    </form>
    </div>
  );
};

export default Form;
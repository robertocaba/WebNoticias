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
    console.log(event.target.Name);
    console.log(event.target.value);
    setData({
      ...data,
      [event.target.Name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("sending data..." + data.Name, data.articulo);
    setTimeout(() => {
        navigate('/')
    }, 1000);
  };

  let Name = data.Name;
  let articulo = data.articulo;

  let dataBase = JSON.parse(localStorage.getItem('myform')) || [];
    const information = {
        
        Name,
        articulo
         
     }
     dataBase.push(information)
    localStorage.setItem('myform', JSON.stringify(dataBase));
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
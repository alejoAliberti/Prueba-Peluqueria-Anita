import React from "react";


export const CrearCliente = () => {

    return (

    <>
    <h1>Crear Cliente</h1>    
    <form className="crearForm">
      
        <input name="Nombre" placeholder="Nombre"  className="inputForm" type="text" />

        <input name="Apellido" placeholder="Apellido" className="inputForm" type="text" />

        <input name="Edad" placeholder="Edad" className="inputForm" type="text" />

        <input name="Dirección" placeholder="Direccón"  className="inputForm" type="text" />

        <input name="E-mail" placeholder="E-mail" className="inputForm" type="text" />

        <input name="Telefono" placeholder="Telefono"  className="inputForm" type="text" />

      <button className="buttonForm" type="submit">Crear</button>
      


     </form>
      
    </>
    )
}
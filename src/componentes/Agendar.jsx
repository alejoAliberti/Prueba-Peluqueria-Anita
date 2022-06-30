import React from 'react'


export const Agendar = () => {

    return (
    <>

    <h1>Agendar Cita</h1>
      <form className="crearForm">
      
      <p placeholder='Fecha'>Fecha de Turno
      <input name="Fecha" placeholder="Fecha"  className="inputForm" type="date" />
      </p>

    <p>Hora  
      <input name="Apellido" placeholder="Apellido" className="inputForm" type="time"/>
    </p>

      <input name="Cliente" placeholder="Cliente"  className="inputForm" type="text" />

      <select name="Servicio" placeholder="Servicio" className="selectForm" type="text">
        <option value="Corte">Corte</option>
        <option value="Tintura">Tintura</option>
        <option value="Alisado">Alisado</option>
        <option value="Keratina">Keratina</option>
        <option value="Botox">Botox</option>
        <option value="Permante">Permanente</option>
        <option value="Permanente pestañas">Permanente Pestañas</option>
        <option value="Manicura">Manicura</option>
      </select>

      <input name="E-mail" placeholder="E-mail" className="inputForm" type="text" />

      <input name="Telefono" placeholder="Telefono"  className="inputForm" type="text" />

    <button className="buttonForm" type="submit">Guardar</button>
    


   </form>
        </>
    )
}
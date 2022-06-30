import React from 'react'

import { Link } from "react-router-dom";
import { useHistory } from 'react-router-dom';


export const Header = () => {


    return(
        <nav>
         <Link to='/'>
           <img src='https://i.pinimg.com/736x/bd/39/c3/bd39c398998e5532503eaa1faa0d925b.jpg' width={"150"} height='110' ></img>
         
         </Link>
        


        
        <Link to='/Citas'>
            <button className='buttonHeader' >Citas</button>
        </Link>

        <Link to='/CitasAtendidas'>
        <button className='buttonHeader'>Citas atendidas</button>
        </Link>


        <Link to='/CrearCliente'>
        <button className='buttonHeader'>Crear Cliente</button>
        </Link>

        <Link to='/Agendar'>
        <button className='buttonHeader'>Agendar Cita</button>
        </Link>
        <Link to='/'>
        <button className='buttonHeader'>Clientes</button>
        </Link>

        
        </nav>
    )
}
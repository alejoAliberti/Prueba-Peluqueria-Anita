import React from 'react'


export const Citas = () => {

    return(


        <>
        <h1>Listado de citas Pendientes</h1>

        <table>

            <tr >
                <td><strong>Fecha</strong></td>
                <td><strong>Cliente</strong></td>
                <td><strong>Servicio Solicitado</strong></td>
                <td><strong>Estado</strong></td>
                
            </tr>


            <tr bgcolor='#D7D0CF'>
                <td>02/08/2022</td>
                <td>Alejo Aliberti</td>
                <td>Corte <button className='añadirButton'>Añadir Servicio</button></td>
                <td><select name='Estado'>
                    <option>Pendiente</option>
                    <option>Atendido</option>
                    <option>Cancelado</option>                   
                    </select></td>
            </tr>
            <tr bgcolor='#D7D0CF'>
                <td>15/07/2022</td>
                <td>Maria Nieves</td>
                <td>Botox <button className='añadirButton'>Añadir Servicio</button></td>
                <td><select name='Estado'>
                    <option>Pendiente</option>
                    <option>Atendido</option>
                    <option>Cancelado</option>                   
                    </select></td>
            </tr>
            <tr bgcolor='#D7D0CF'>
                <td>05/07/2022</td>
                <td>Mirta Cantero</td>
                <td>Tintura y Corte <button className='añadirButton'>Añadir Servicio</button></td>
                <td><select name='Estado'>
                    <option>Pendiente</option>
                    <option>Atendido</option>
                    <option>Cancelado</option>                   
                    </select></td>
            </tr>
            <tr bgcolor='#D7D0CF'>
                <td>06/08/2022</td>
                <td>Fernanda Otero</td>
                <td>Alisado <button className='añadirButton'>Añadir Servicio</button></td>
                <td><select name='Estado'>
                    <option>Pendiente</option>
                    <option>Atendido</option>
                    <option>Cancelado</option>                   
                    </select></td>
            </tr>
            <tr bgcolor='#D7D0CF'>
                <td>01/07/2022</td>
                <td>Martin Rodriguez</td>
                <td>Tintura y Corte<button className='añadirButton'>Añadir Servicio</button></td>
                <td><select name='Estado'>
                    <option>Pendiente</option>
                    <option>Atendido</option>
                    <option>Cancelado</option>                   
                    </select></td>
            </tr>
        </table>
        
        </>
    )
}
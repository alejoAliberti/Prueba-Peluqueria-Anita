import React from 'react'


export const CitasAtendidas = () => {

    return(

        <>

<h1>Citas atendidas</h1>
        
        <table className="ListaClientes">
            <thead className="ListaClientes">
                <td><strong>Fecha de atencion</strong></td>
                <td><strong>Cliente</strong></td>
                <td><strong>Servicio Realizado</strong></td>
                <td><strong>Total</strong></td>
                <td><strong>Metodo de Pago</strong></td>
                <td><strong>Adeuda</strong></td>
                
            </thead>

            <tr bgcolor='#D7D0CF'>
                <td>07/01/2022</td>
                <td>Aliberti Alejo</td>
                <td>Corte, Tintura</td>
                <td>$1200</td>
                <td>Efectivo</td>
                <td>$200</td>
            </tr>
            <tr bgcolor='#D7D0CF' >
                <td>09/01/2022</td>
                <td>Maria Perez</td>
                <td>Botox, Manicura</td>
                <td>$2000</td>
                <td>Tarjeta</td>
                <td>No</td>
            </tr>
            <tr bgcolor='#D7D0CF'>
                <td>25/01/2022</td>
                <td>Alejandra Gutierrez</td>
                <td>Alisado</td>
                <td>$1800</td>
                <td>Tarjeta</td>
                <td>No</td>
            </tr>
            <tr bgcolor='#D7D0CF'>
                <td>16/02/2022</td>
                <td>Benito Lopez</td>
                <td>Corte</td>
                <td>$500</td>
                <td>Efectivo</td>
                <td>No</td>
            </tr>


        </table>
        

        

        </>
    )
}
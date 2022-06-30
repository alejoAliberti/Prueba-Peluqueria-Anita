import React from "react"


export const ListaClientes = () => {
    return(


        <>
        <h1>Listado de Clientes</h1>
        
        <table className="ListaClientes">
            <thead className="ListaClientes">
                <td><strong>Nombre</strong></td>
                <td><strong>Apellido</strong></td>
                <td><strong>Edad</strong></td>
                <td><strong>Dirección</strong></td>
                <td><strong>Telefono</strong></td>
                <td><strong>E-mail</strong></td>
                
            </thead>

            <tr bgcolor='#D7D0CF'>
                <td>Alejo</td>
                <td>Aliberti</td>
                <td>23</td>
                <td>sur mer 1182</td>
                <td>12548752</td>
                <td>alibertialejo@gmail.com</td>
                <td><a className="citas" href="/Citas">Citas</a></td>
            </tr>
            <tr bgcolor='#D7D0CF' >
                <td>Maria</td>
                <td>Perez</td>
                <td>52</td>
                <td>av. falsa 123</td>
                <td>12365845</td>
                <td>maria@gmail.com</td>
                <td><a className="citas" href="/Citas">Citas</a></td>
            </tr>
            <tr bgcolor='#D7D0CF'>
                <td>Alejandra</td>
                <td>Gutierrez</td>
                <td>32</td>
                <td>av. falsa 4123</td>
                <td>1235487</td>
                <td>alejandra@email.com</td>
                <td><a className="citas" href="/Citas">Citas</a></td>
            </tr>
            <tr bgcolor='#D7D0CF' >
                <td>Benito</td>
                <td>Lopez</td>
                <td>43</td>
                <td>av. falsa 534</td>
                <td>1158472351</td>
                <td>lopezBenito@gmail.com</td>
                <td><a className="citas" href="/Citas">Citas</a></td>
            </tr>


        </table>

        <a href='/CrearCliente' className="aCrear">Crear cliente</a>


        </>


    )
}
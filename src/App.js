
import './App.css';
import React from 'react'
import { ReactDOM } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Citas } from './componentes/Citas';
import { CrearCliente } from './componentes/CrearCliente';
import { Header } from './componentes/Header';
import { ListaClientes } from './componentes/ListaClientes';
import { CitasAtendidas } from './componentes/CitasAtendidas';

import { Agendar } from './componentes/Agendar';


function App() {
  return (
    
    <>
    <Header/>
    
    <Switch>
    
    <Route  path='/' exact={true} component={ListaClientes} />
      
    <Route path='/Citas' >
      <Citas/>  
    </Route>
    <Route  path='/CrearCliente' component={CrearCliente}/>
    <Route  path='/CitasAtendidas' component={CitasAtendidas}/>
    <Route path='/Agendar' component={Agendar} />
    
    </Switch>
    </>
    
    
  );
}

export default App;

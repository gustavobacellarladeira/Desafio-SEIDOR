import React from 'react'
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";


import Home from '../pages/Home'
import TabelaDeIRRF from '../pages/TabelaDeIRRF'
import CadastroDeUsuario from '../pages/CadastrarUsuario'


const index = () => {
    return (
        <Router>
            <Route path='/' exact componet={Home} />
            <Route path='/usuarios' exact componet={TabelaDeIRRF} />
            <Route path='/cadastro' exact componet={CadastroDeUsuario} />
            <Redirect to="/" />
        </Router>
    )
}

export default index

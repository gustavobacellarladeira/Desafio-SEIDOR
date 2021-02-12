import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import TabelaDeIRRF from '../pages/TabelaDeIRRF/TabelaDeIRRF';
import CadastroDeUsuario from '../pages/CadastrarUsuario/CadastrarUsuario';
import Editar from '../pages/Editar/Editar';

const index = () => {
  return (
    <Switch>
      <Route path="/TabelaDeIRRF">
        <TabelaDeIRRF />
      </Route>
      <Route path="/CadastroDeUsuario">
        <CadastroDeUsuario />
      </Route>
      <Route path="/Editar">
        <Editar />
      </Route>

      <Route path="/">
        <Home />
      </Route>
      <Redirect from="*" to="/" />
    </Switch>
  );
};

export default index;

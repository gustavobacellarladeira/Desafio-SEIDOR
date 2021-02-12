import React from 'react';
import './style.css';

const Home = () => {
  return (
    <section>
      <div className="title--container">
        <h1>Desasfio SEIDOR</h1>
      </div>
      <div className="home">
        <div className="home-about">
          <h2>Teste Técnico Prático SEIDOR</h2>
          <p>
            Precisamos desenvolver um sistema web que permita-nos gerenciar
            nossos funcionários e o cálculo de imposto de renda retido na fonte
            (IRRF) de cada um deles. Para isso construiremos uma aplicação com
            as seguintes funcionalidades:
          </p>
          <b>Cadastro de Funcionário:</b>
          <ul>
            <li>Campos devem ser informados manualmente</li>
            <ul>
              <li>Nome</li>
              <li>Cpf</li>
              <li>Salário Bruto</li>
              <li>Desconto da previdência</li>
              <li>Número de dependentes</li>
            </ul>
            <li>Incluir um novo Funcionário</li>
            <li>Atualizar um Funcionário cadastrado</li>
            <li>Excluir um Funcionário cadastrado</li>
            <li>Listar os Funcionário cadastrados</li>
          </ul>

          <p>
            A cada novo funcionário cadastrado, com base nas informações
            inseridas, o sistema deve calcular o valor de salário base para
            cálculo do IR, o desconto IRRF e apresentar essas informações na
            listagem dos funcionários cadastrados.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

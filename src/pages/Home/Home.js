import React from 'react';
import { Table } from 'react-bootstrap'
import './style.css';

const Home = () => {
  return (
    <section>

      <div className="title--container">
        <h3>Desasfio SEIDOR</h3>
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
          <p style={{ textAlign: 'center' }}>
            <strong>Salário Base IR</strong> = Salário bruto - Desconto da Previdência - Dedução por Dependente x
            Quantidade de Dependentes
          </p>
          <p style={{ textAlign: 'center' }}>
            <strong>Desconto IRRF</strong> = Salário Base IR x Alíquota - Parcela a Deduzir
          </p>

          <p>
            A tabela progressiva do IRRF que deve ser utilizada:
          </p>
          <Table responsive bordered hover>
            <thead>
              <tr>

                <th>Base de cálculo</th>
                <th>Alíquota</th>
                <th>Parcela a deduzir do IRPF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Até R$ 1.903,98</td>
                <td>Isento</td>
                <td>R$ 0,00</td>

              </tr>
              <tr>
                <td>De R$ 1.903,99 até R$ 2.826,65</td>
                <td>7,5%</td>
                <td>R$ 142,80</td>

              </tr>
              <tr>
                <td>De R$ 2.826,66 até R$ 3.751,05</td>
                <td>15%</td>
                <td>R$ 354,80</td>

              </tr>
              <tr>
                <td>De R$ 3.751,06 até R$ 4.664,68</td>
                <td>22,5%</td>
                <td>R$ 636,13</td>

              </tr>
              <tr>
                <td>Acima de R$ 4.664,68</td>
                <td>27,5%</td>
                <td>R$869,36</td>

              </tr>
            </tbody>
          </Table>
          <p style={{ textAlign: 'center' }}>

            <b >Dedução por dependente: R$ 164,56</b>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;

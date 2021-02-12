import React from 'react';
import './style.css';
import { Table } from 'react-bootstrap';

const TabelaDeIRRF = () => {
  const state = [
    {
      nome: 'Letícia Aurora Farias',
      cpf: '936.938.039-60',
      salario: 998,
      desconto: 74.85,
      dependentes: 2
    },
    {
      nome: 'Edson Thiago Drumond',
      cpf: '748.517.476-24',
      salario: 1045,
      desconto: 78.38,
      dependentes: 1
    },
    {
      nome: 'Fátima Elza Tereza Castro',
      cpf: '701.118.872-08',
      salario: 5500,
      desconto: 628.95,
      dependentes: 0
    },
    {
      nome: 'Sandra Giovanna Drumond',
      cpf: '715.890.756-25',
      salario: 4522,
      desconto: 492.03,
      dependentes: 3
    },
    {
      nome: 'Valentina Clara Nunes',
      cpf: '101.151.404-41',
      salario: 10000,
      desconto: 713.1,
      dependentes: 4
    }
  ];

  return (
    <section>
      <div className="title--container">
        <h1>Tabela</h1>
      </div>
      <div className="tabela--container">
        <div className="tabela">
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Salário</th>
                <th>Desconto</th>
                <th>Dependentes</th>
                <th>Desconto IRPF</th>
              </tr>
            </thead>
            <tbody>
              {state.map((res, index) => (
                <tr key={index}>
                  <td>{res.nome}</td>
                  <td>{res.cpf}</td>
                  <td>{res.salario}</td>
                  <td>{res.desconto}</td>
                  <td>{res.dependentes}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default TabelaDeIRRF;

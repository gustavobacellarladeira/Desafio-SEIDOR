import React, { useState } from 'react';
import './style.css';
import { Table } from 'react-bootstrap';

// pega da store do redux
import { useSelector } from 'react-redux';

const TabelaDeIRRF = () => {
  const x = useSelector((state: any) => state.usuarios);

  const xx = () => {
    console.log(x);
  };
  return (
    <section>
      <button onClick={xx}> get x</button>
      <ul>
        <li>aaaaa</li>
        {x.map((res: string) => {
          <li key={res}>{res}</li>;
        })}
        <li>bbbbbbbbs</li>
      </ul>
      <div className="title--container">
        <h1>Tabela</h1>
      </div>
      <div className="tabela--container">
        <div className="tabela">
          {/* <Table striped bordered hover variant="dark">
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
              {usuarios.map((res: any, index: number) => (
                <tr key={index}>
                  <td>{res.nome}</td>
                  <td>{res.cpf}</td>
                  <td>{res.salario}</td>
                  <td>{res.desconto}</td>
                  <td>{res.dependentes}</td>
                </tr>
              ))}
            </tbody>s
          </Table> */}
        </div>
      </div>
    </section>
  );
};

export default TabelaDeIRRF;

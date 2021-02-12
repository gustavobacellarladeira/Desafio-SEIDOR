import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './styles.css';

type form = {
  nome: string;
  cpf: number;
  salario: number;
  desconto: number;
  dependentes: number;
};

const CadastrarUsuario = () => {
  // formulario com react-hook-form
  const { register, handleSubmit, errors } = useForm<form>();

  const [state, setState] = useState<any>([]);

  const onSubmit = handleSubmit(data => {
    const irpf = DescontoIRPF(
      SalarioBaseIR(data.salario, data.desconto, data.dependentes)
    );
    const funcionario = [
      {
        nome: data.nome,
        cpf: data.cpf,
        salario: data.salario,
        desconto: data.desconto,
        dependentes: data.dependentes,
        irpf: irpf
      }
    ];

    setState([...state, ...funcionario]);
    console.log(state);
  });

  // Calcula o salario Base IR
  const SalarioBaseIR = (
    SalarioBruto: number,
    DescontoPrevidencia: number,
    QuantidadeDeDependente: number
  ) => {
    const DeducaoPorDependente = 164.56;
    let SalarioBaseIR =
      SalarioBruto -
      DescontoPrevidencia -
      DeducaoPorDependente * QuantidadeDeDependente;
    return SalarioBaseIR;
  };

  // Calcula o Desconto IRPF
  const DescontoIRPF = (SalarioBaseIR: number) => {
    // Inicio Calculo da aliquota e Parcela a deduzir do IRPF //
    let aliquota = 0;
    let ParcelaADeduzirDoIRPF = 0;

    // Até R$ 1.903,98
    if (SalarioBaseIR >= 0 && SalarioBaseIR <= 1903.98) {
      aliquota = 0;
      ParcelaADeduzirDoIRPF = 0;
    }
    // De R$ 1.903,99 até R$ 2.826,65
    else if (SalarioBaseIR >= 1903.99 && SalarioBaseIR <= 2826.65) {
      aliquota = 0.075;
      ParcelaADeduzirDoIRPF = 142.8;
    }
    // De R$ 2.826,66 até R$ 3.751,05
    else if (SalarioBaseIR >= 2826.66 && SalarioBaseIR <= 3751.05) {
      aliquota = 0.15;
      ParcelaADeduzirDoIRPF = 354.8;
    }
    // De R$ 3.751,06 até R$ 4.664,68
    else if (SalarioBaseIR >= 3751.06 && SalarioBaseIR <= 4664.68) {
      aliquota = 0.225;
      ParcelaADeduzirDoIRPF = 636.13;
    }
    // Acima de R$ 4.664,68
    else if (SalarioBaseIR > 4664.68) {
      aliquota = 0.275;
      ParcelaADeduzirDoIRPF = 869.36;
    }
    // Fim Calculo da aliquota e Parcela a deduzir do IRPF //
    const DescontoIRPF = SalarioBaseIR * aliquota - ParcelaADeduzirDoIRPF;
    return DescontoIRPF;
  };

  return (
    <section>
      <div className="title--container">
        <h1>Cadastro de Usuário</h1>
      </div>
      <div className="form--container">
        <form onSubmit={onSubmit}>
          {/* Inicio Input */}
          <label htmlFor="name">Nome</label>
          <input
            className="input-submit"
            id="nome"
            name="nome"
            type="text"
            ref={register({ required: true })}
          />
          {errors.nome && <div className="error">Coloque seu nome</div>}
          {/* Fim Input */}
          {/* Inicio Input */}
          <label htmlFor="cpf">CPF</label>
          <input
            className="input-submit"
            id="cpf"
            name="cpf"
            type="text"
            ref={register({ required: true })}
          />
          {errors.cpf && <div className="error">Coloque seu CPF</div>}
          {/* Fim Input */}
          {/* Inicio Input */}
          <label htmlFor="salario">Salário Bruto</label>
          <input
            className="input-submit"
            id="salario"
            name="salario"
            type="text"
            ref={register({ required: true })}
          />
          {errors.salario && (
            <div className="error">Coloque seu Salário Bruto</div>
          )}
          {/* Fim Input */}
          {/* Inicio Input */}
          <label htmlFor="desconto">Desconto da previdência</label>
          <input
            className="input-submit"
            id="desconto"
            name="desconto"
            type="text"
            ref={register({ required: true })}
          />
          {errors.desconto && (
            <div className="error">Coloque seu Desconto da previdência</div>
          )}
          {/* Fim Input */}
          {/* Inicio Input */}
          <label htmlFor="dependentes">Número de dependentes</label>
          <input
            className="input-submit"
            id="dependentes"
            name="dependentes"
            type="text"
            ref={register({ required: true })}
          />
          {errors.dependentes && (
            <div className="error">Coloque seu Número de dependentes</div>
          )}
          {/* Fim Input */}
          <div className="btn-submit--container">
            <Button type="submit" variant="outline-success">
              Cadastrar
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default CadastrarUsuario;

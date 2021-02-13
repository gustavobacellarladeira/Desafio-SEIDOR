import React, { useState } from 'react';
import { Table, Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
// pega da store do redux
import { useSelector, useDispatch } from 'react-redux';

import './style.css';

const TabelaDeIRRF = () => {
  const { register, handleSubmit, errors } = useForm();
  const Usuarios = useSelector((state) => state.usuarios);
  const dispatch = useDispatch()

  // MODALs
  const [showModalDelete, setShowModalDelete] = useState(false);
  const [showModalEditar, setShowModalEditar] = useState(false);
  const [IndexPopUp, setIndexPopUp] = useState(0);
  const [idParaDelete, setIdParaDelete] = useState(0);

  const handleClose = () => setShowModalEditar(false);
  const handleShow = (index) => {
    setShowModalEditar(true)
    setIndexPopUp(index)
    console.log(index)

  };

  // gera um id unico
  const generateID = () => {
    const id = '_' + Math.random().toString(36).substr(3, 9);
    console.log(id)
    return id
  };

  const onSubmitEditar = handleSubmit(async (data) => {
    const irpf = DescontoIRPF(
      SalarioBaseIR(data.salario, data.desconto, data.dependentes)
    );
    const funcionario =
    {
      index: IndexPopUp,
      id: generateID(),
      nome: data.nome,
      cpf: data.cpf,
      salario: data.salario,
      desconto: data.desconto,
      dependentes: data.dependentes,
      irpf: irpf
    }
    console.log(funcionario)
    dispatch({ type: 'UPDATE_FUNCIONARIO', data: funcionario })
    handleClose()
  });


  const SalarioBaseIR = (
    SalarioBruto,
    DescontoPrevidencia,
    QuantidadeDeDependente
  ) => {
    const DeducaoPorDependente = 164.56;
    let SalarioBaseIR =
      SalarioBruto -
      DescontoPrevidencia -
      DeducaoPorDependente * QuantidadeDeDependente;
    return SalarioBaseIR;
  };

  // Calcula o Desconto IRPF
  const DescontoIRPF = (SalarioBaseIR) => {
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

  // deleta o funcionario escolhido

  const deleteFuncionarioModal = (id, index) => {
    setShowModalDelete(true)
    setIdParaDelete(id)
    setIndexPopUp(index)
  }
  const handleDelete = () => {
    setShowModalDelete(false)
    dispatch({ type: 'DELETE_FUNCIONARIO', index: idParaDelete })
  };



  return (
    <section>

      <div className="title--container">
        <h3>Tabela</h3>
      </div>

      <div className="tabela--container">
        <div className="tabela">
          <Table responsive striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Nome</th>
                <th>CPF</th>
                <th>Salário</th>
                <th>Desconto</th>
                <th>Dependentes</th>
                <th>Desconto IRPF</th>
                <th>Deletar</th>
                <th>Editar</th>


              </tr>
            </thead>
            <tbody>

              {Usuarios.map((res, index) => (
                <tr key={index}>
                  <td>{res.nome}</td>
                  <td>{res.cpf}</td>
                  <td>{res.salario}</td>
                  <td>{res.desconto}</td>
                  <td>{res.dependentes}</td>
                  <td>{res.irpf}</td>

                  <td><Button variant="outline-danger" onClick={() => {

                    deleteFuncionarioModal(res.id, index)
                  }
                  }>delete</Button></td>
                  <td> <Button variant="outline-warning" onClick={() => {

                    handleShow(index)
                  }}>Editar</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Modal show={showModalDelete} onHide={() => setShowModalDelete(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Deletar funcionario {Usuarios[IndexPopUp].nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Você tem certeza? Uma vez feito não será possivel desfazer!</Modal.Body>
          <Modal.Footer>
            <Button variant="outline-secondary" onClick={() => setShowModalDelete(false)}>
              Cancelar
          </Button>
            <Button variant="outline-danger" onClick={handleDelete}>
              Confirmar
          </Button>
          </Modal.Footer>
        </Modal>

        {/* INICIO MODAL */}
        {Usuarios[IndexPopUp] && <Modal
          size='lg'
          show={showModalEditar} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar funcionario {Usuarios[IndexPopUp].nome}</Modal.Title>
          </Modal.Header>
          <Modal.Body >

            <form onSubmit={onSubmitEditar}>
              {/* Inicio Input */}
              <div className="form-modal--container">


                <label htmlFor="name">Nome</label>
                <input

                  placeholder={Usuarios[IndexPopUp].nome}
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
                  placeholder={Usuarios[IndexPopUp].cpf}
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
                  placeholder={Usuarios[IndexPopUp].salario}
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
                  placeholder={Usuarios[IndexPopUp].desconto}
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
                  placeholder={Usuarios[IndexPopUp].dependentes}
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
              </div>

              <Modal.Footer>
                <Button variant="outline-secondary" onClick={handleClose}>
                  Close
                      </Button>
                <Button type="submit" variant="outline-success" >
                  Save Changes
                      </Button>
              </Modal.Footer>
            </form>

          </Modal.Body>
        </Modal>}
        {/* FIM MODAL */}

      </div>
    </section >
  );
};

export default TabelaDeIRRF;
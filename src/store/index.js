import { createStore } from 'redux';

// como vai ser no inicio de tudo
let INITIAL_STATE = {
  usuarios: [
    {
      "id": "ISTO E O ID 1",
      "nome": "Letícia Aurora Farias",
      "cpf": "936.938.039-60",
      "salario": 998,
      "desconto": 74.85,
      "dependentes": 2,
      "irpf": 0
    },
    {
      "id": "ISTO E O ID 2",
      "nome": "Edson Thiago Drumond",
      "cpf": "748.517.476-24",
      "salario": 1045,
      "desconto": 78.38,
      "dependentes": 1,
      "irpf": 0
    },
    {
      "id": "ISTO E O ID 3",
      "nome": "Fátima Elza Tereza Castro",
      "cpf": "701.118.872-08",
      "salario": 5500,
      "desconto": 628.95,
      "dependentes": 0,
      "irpf": 470.17875000000015
    },
    {
      "id": "ISTO E O ID 4",
      "nome": "Sandra Giovanna Drumond",
      "cpf": "715.890.756-25",
      "salario": 4522,
      "desconto": 492.03,
      "dependentes": 3,
      "irpf": 175.64350000000007
    },
    {
      "id": "ISTO E O ID 5",
      "nome": "Valentina Clara Nunes",
      "cpf": "101.151.404-41",
      "salario": 10000,
      "desconto": 713.1,
      "dependentes": 4,
      "irpf": 1503.5214999999998
    }
  ]

};

// reducer
function usuarios(state = INITIAL_STATE, action) {
  switch (action.type) {

    case 'ADD_FUNCIONARIO':
      return { ...state, usuarios: [...state.usuarios, action.form] };
    case 'UPDATE_FUNCIONARIO':
      let funcionario = action.data;
      // clona o atual state
      let cloneUpdate = state.usuarios;

      cloneUpdate[funcionario.index] = funcionario;
      return { ...state, usuarios: cloneUpdate };

    case 'DELETE_FUNCIONARIO':
      let id = action.index
      // clona o atual state
      let cloneDelete = state.usuarios;
      // checando parar ver se existe
      const indexDelete = cloneDelete.findIndex((obj) => obj.id === id);
      // nao deixar exluir tudo, e sim apenas o selecionado
      if (indexDelete !== -1)
        cloneDelete.splice(indexDelete, 1)
      console.log(cloneDelete)
      console.log(indexDelete)
      return { ...state, usuarios: cloneDelete };


    default:
      return state;

  }
}
const store = createStore(usuarios);

export default store;

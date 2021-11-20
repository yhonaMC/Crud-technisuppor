import { types } from "../types/Types";

const initialState = {
  clientes: [],
  editarCliente: {
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
  },
};

export const ClientesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.clienteVista:
      return {
        ...state,
        clientes: [...action.payload],
      };

    case types.clienteNuevo:
      return {
        ...state,
        clientes: [action.payload, ...state.clientes],
      };

    case types.clienteEditar:
      return {
        ...state,
        editarCliente: action.payload,
      };

    case types.clienteEliminar:
      return {
        ...state,
      };

    default:
      return state;
  }
};

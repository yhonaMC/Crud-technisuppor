import { types } from "../types/Types";
import axios from "axios";

// Ver lista de clientes

export const clientesView = () => {
  return async (dispatch) => {
    let clientesApi = [];
    try {
      const response = await axios.get(
        "https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos"
      );
      clientesApi = response.data;
    } catch (error) {
      console.log(error);
    }
    dispatch(clientesSet(clientesApi));
    dispatch(ClienteEdit(clientesApi));
  };
};

// Añadir Nuevo clientes

export const clientesAdd = (clientes) => {
  return async (dispatch) => {
    const clientNew = {
      nombre: clientes.nombre,
      apellido: clientes.apellido,
      telefono: clientes.telefono,
      direccion: clientes.direccion,
    };

    axios
      .post(
        "https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos",
        clientNew
      )
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
    dispatch(clientesNew(clientNew));
  };
};

// Editar clientes

export const clientesEdit = (clientes) => {
  return async (dispatch, getSate) => {
    const id = getSate().ClientesReducer.editarCliente.id;
    const editar = {
      nombre: clientes.nombre,
      apellido: clientes.apellido,
      telefono: clientes.telefono,
      direccion: clientes.direccion,
    };
    await axios.put(
      `https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos/${id}`,
      editar
    );

    dispatch(clientesView());
  };
};

// Eliminar Clientes

export const clientesEliminar = (id) => {
  return async (dispatch) => {
    await axios.delete(
      `https://618aac0d34b4f400177c480e.mockapi.io/api/v1/contactos/${id}`
    );
    dispatch(clientesView());
  };
};

export const clientesSet = (clientesApi) => ({
  type: types.clienteVista,
  payload: clientesApi,
});

export const clientesNew = (clientes) => ({
  type: types.clienteNuevo,
  payload: {
    ...clientes,
  },
});

export const ClienteEdit = (clientesApi) => {
  return {
    type: types.clienteEditar,
    payload: clientesApi,
  };
};

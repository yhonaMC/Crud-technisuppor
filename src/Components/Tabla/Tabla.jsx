import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  clientesEliminar,
  ClienteEdit,
} from "../../Redux/actions/actionClient";

const Tabla = () => {
  const { clientes } = useSelector((store) => store.ClientesReducer);
  const [client, setCliente] = useState(clientes);
  const dispatch = useDispatch();

  const handleEliminar = (id) => {
    dispatch(clientesEliminar(id));
  };

  const handleEditar = (data) => {
    dispatch(ClienteEdit(data));
  };

  useEffect(() => {
    setCliente(clientes);
  }, [clientes]);

  return (
    <div>
      <div className="table-responsive">
        <table className="table container col-md-8 col-xs-5">
          <thead className="thead-dark bg-dark text-white">
            <tr>
              <th scope="col">Nombre</th>
              <th scope="col">Apellido</th>
              <th scope="col">Telefono</th>
              <th scope="col">Direccion</th>
              <th scope="col">Opciones</th>
            </tr>
          </thead>
          <tbody>
            {client.map((usuarios) => (
              <tr key={usuarios.id}>
                <td>{usuarios.nombre}</td>
                <td>{usuarios.apellido}</td>
                <td>{usuarios.telefono}</td>
                <td>{usuarios.direccion}</td>
                <td>
                  <button
                    className="btn btn-primary me-2 w-20"
                    role="group"
                    onClick={() => handleEditar(usuarios)}
                  >
                    Modificar
                  </button>
                  <button
                    className="btn btn-danger "
                    role="group"
                    onClick={() => handleEliminar(usuarios.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tabla;

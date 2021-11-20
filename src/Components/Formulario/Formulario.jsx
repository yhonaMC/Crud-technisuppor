import React, { useEffect, useState } from "react";
import { useForm } from "../../UseForm/UseForm";
import { useDispatch, useSelector } from "react-redux";
import alertify from "alertifyjs";
import "alertifyjs/build/css/alertify.css";
import {
  clientesView,
  clientesAdd,
  clientesEdit,
} from "../../Redux/actions/actionClient";

const Formulario = () => {
  const dispatch = useDispatch();
  let titleOne = "Crear Cliente";
  let titleTwo = "Editar Cliente";

  const [titulo, setTitulo] = useState(titleOne);
  const [editar, setEditar] = useState(false);
  const [values, handleInputChange, formatear, setValues] = useForm({
    nombre: "",
    apellido: "",
    telefono: "",
    direccion: "",
  });
  const { nombre, apellido, telefono, direccion } = values;
  const clientesEditar = useSelector(
    (store) => store.ClientesReducer.editarCliente
  );

  const hanldeSubmit = (e) => {
    e.preventDefault();
  };

  const handleAñadir = () => {
    if (
      nombre === undefined ||
      apellido === undefined ||
      telefono === undefined ||
      direccion === undefined
    ) {
      alertify.error("Debes llenar todos los campos");
    } else {
      dispatch(clientesAdd(values));
      formatear();
    }
  };

  const handleEditar = async () => {
    dispatch(clientesEdit(values));
    formatear();
    setEditar(false);
    setTitulo(titleOne);
  };

  useEffect(() => {
    dispatch(clientesView());
  }, []);

  useEffect(() => {
    if (clientesEditar.length === undefined) {
      setEditar(true);
      setTitulo(titleTwo);
      setValues(clientesEditar);
    } else {
      setEditar(false);
      setTitulo(titleOne);
      setValues("");
    }
  }, [clientesEditar]);

  return (
    <>
      <h3 className="d-flex justify-content-center text-success">{titulo}</h3>
      <form className="container col-md-5 col-sm-5" onSubmit={hanldeSubmit}>
        <div className="input-group mb-3 container">
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons ">perm_identity</i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre del Cliente"
            aria-label="Nombre"
            name="nombre"
            value={nombre}
            aria-describedby="basic-addon1"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3 container">
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons ">perm_identity</i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Apellido del Cliente"
            aria-label="Apellido"
            name="apellido"
            value={apellido}
            aria-describedby="basic-addon1"
            required
            onChange={handleInputChange}
          />
        </div>

        <div className="input-group mb-3 container">
          <span className="input-group-text" id="basic-addon1">
            <i className="material-icons ">phone_enabled</i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Telefono del Cliente"
            aria-label="Telefono"
            maxLength="10"
            name="telefono"
            value={telefono}
            aria-describedby="basic-addon1"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="input-group mb-3 container">
          <span className="input-group-text bg-green" id="basic-addon1">
            <i className="material-icons ">location_on</i>
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Direccion del cliente"
            aria-label="Direccion"
            name="direccion"
            value={direccion}
            aria-describedby="basic-addon1"
            required
            onChange={handleInputChange}
          />
        </div>
        <div className="d-grid gap-2 container ">
          {!editar ? (
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleAñadir}
            >
              Crear Cliente
            </button>
          ) : (
            <button
              className="btn btn-success"
              type="submit"
              onClick={handleEditar}
            >
              Editar Cliente
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default Formulario;

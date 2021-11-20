import React from "react";
import Formulario from "./Components/Formulario/Formulario.jsx";
import Tabla from "./Components/Tabla/Tabla.jsx";
function App() {
  return (
    <>
      <div className="mt-5">
        <Formulario />
      </div>
      <div className="mt-3">
        <Tabla />
      </div>
    </>
  );
}

export default App;

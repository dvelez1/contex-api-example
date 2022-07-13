import React from "react";

import { DataProvider } from "./context/DataContext";

import { Pagina1 } from "./components/Pagina1";
import { Pagina2 } from "./components/Pagina2";
import { BotonCambiarData } from "./components/BotonCambiarData";



function App() {
 
  return (
    <DataProvider>
      <div className="container">
        <Pagina1 />
        <Pagina2 />
        <BotonCambiarData />
      </div>
    </DataProvider>
  );
}

export default App;

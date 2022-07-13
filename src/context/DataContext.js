import React, { createContext, useState } from "react";

export const DataContext = createContext();

const dataFixed = {
    nombre: "Fernando",
    edad: 35,
  };

export const DataProvider = ({ children }) => {
  const [data, setData] = useState(dataFixed);

  return (
    <div>
      <DataContext.Provider value={{
        data,
        setData
      }}>
        {children}
      </DataContext.Provider>
    </div>
  );
};

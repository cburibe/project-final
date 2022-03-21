import React, { useContext } from "react";

export const Prueba = () => {
  const [store, actions] = useContext();
  <div>
    <ul>
      {store.people.map((persona, posicion) => {
        return <li key={posicion}>User.id{persona.id}</li>;
      })}
    </ul>
  </div>;
};

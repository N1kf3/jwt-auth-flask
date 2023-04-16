import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate  } from "react-router-dom";

import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.jwt_token == null) {
        alert("Por favor inicia sesión con tus credenciales de usuario")
        navigate("/login");
        return ;
    }
    actions.getProfile()

}, [store.jwt_token]);



  return (
    <div>
      {
        !store.jwt_token ?
        <h1>inicie sesion para ver la infromacion del usuario</h1>
        :
          <div className="container ">
        <h1>informacion privada del usuario</h1>
        </div>
          
      }
    </div>

  );
};

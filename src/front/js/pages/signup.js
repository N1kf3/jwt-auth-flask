import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [usuario, setUser]= useState();
  const [password , setPassword] = useState();
  const navigate = useNavigate();

  const crearUsuario = async (event)=>{
    event.preventDefault();
    console.log("user= ",usuario ," pass= " ,password)
    
    try {
      const resposne = await fetch(process.env.BACKEND_URL + '/signup' ,{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({"email": usuario , "password":password})
      })
      if (resposne.status == 200) {
        console.log("se creo el usuario")
        navigate("/login");
      }
    }
    catch(error){
      console.log(error)
    }
  }


  return (
      <div className="container ">
        <h1>Signup form</h1>
        <div>
          <form className="w-25">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={e => setUser(e.target.value)}/>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="exampleInputPassword1" onChange={e => setPassword(e.target.value)}/>
            </div>

              <button type="" className="btn btn-primary" onClick={crearUsuario}>
                Crear Usuario
              </button>

          </form>
        </div>
    </div>
  );
};

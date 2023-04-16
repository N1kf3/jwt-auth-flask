import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email,setUser] = useState();
  const [pass,setPass] = useState();
  const navigate = useNavigate();
  const hacerLogin = async (event)=>{
    event.preventDefault();
    

    try {
      const resposne = await fetch(process.env.BACKEND_URL + '/login' ,{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({"email": email , "password":pass})
      })
      if (resposne.status == 200) 
      {
        console.log("inicio sesion");
        const body = await resposne.json();
        actions.setToken(body.jwt_token);
        store.loged = 2;
        navigate("/private");
      }
    }
    catch(error){
      console.log(error)
    }
  }


  return (
      <div className="container ">
        <h1>Login form</h1>
        <div>
          <form className="w-25">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={e => setUser(e.target.value)}/>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input type="password" className="form-control" id="exampleInputPassword1"onChange={e => setPass(e.target.value)}/>
            </div>

              <button type="submit" className="btn btn-primary" onClick={hacerLogin}>
                Iniciar Sesion
              </button>
          
          </form>
        </div>
    </div>
  );
};

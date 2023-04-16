import React, { useEffect, useState, useContext  } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {

  const { actions, store } = useContext(Context)
  const [loged , getLoged]= useState()

  




  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">


            {
						!store.jwt_token ?
              <div>
							<Link to="/login">
								<button className="btn btn-light">Log In</button>
							</Link>

                <Link to="/signup">
                    <button className="btn btn-light ms-4">Signup page</button>
                  </Link>
              </div>
						:
							<Link to="/">
								<button onClick={actions.removeToken} className="btn btn-light">Log Out</button>
							</Link>
							
					}
        </div>
      </div>
    </nav>
  );
};

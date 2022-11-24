import React from 'react';
import {Link, useNavigate} from "react-router-dom";


function Navbar() {
    const currentUser = false;
    const navigate = useNavigate();

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid bg-info">
                    <Link to="/" className="d-flex text-white align-items-center" >
                        <h4> React Movie App</h4>
                    </Link>
                    <div className='d-flex text-white align-items-center bg-danger'>
                        {currentUser ? (
                                <>
                                    <h5 className="mb-0 text-capitalize">
                                        {currentUser?.displayName}
                                    </h5>
                                    <button onClick={()=> navigate("/")} className="ms-2 btn btn-outline-light">Logout</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={()=> navigate("/login")} className="ms-2 btn btn-outline-light">Login</button>
                                    <button onClick={()=> navigate("/register")} className="ms-2 btn btn-outline-light">Register</button>

                                </>
                            )}
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
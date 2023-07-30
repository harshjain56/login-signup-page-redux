import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {




    return (
        <div>
            <div className="login-form">

                <form action="">
                    <div className="heading">
                        <p>Lets Start your Journey👋</p>
                        <h1>Create your Account</h1>
                    </div>

                    <div className="input-item">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" />
                    </div>

                    <div className="input-item">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" />
                    </div>

                    <div className="input-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" />
                    </div>

                    <div className="input-item">
                        <label htmlFor="confrimpassword">Confrim Password</label>
                        <input type="password" id="confrimpassword" />
                    </div>

                </form>



            </div>

            

        </div>



    )
}

export default Signup
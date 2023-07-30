import React, { useState , useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IdContext from "../Context/IdContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let [person, setPerson]= useState({name:"",password:""})
  let [error,setError]=useState("")
  let{id,setId}=useContext(IdContext)
  let navigate=useNavigate()
   
  async function authenicatingUser(e){
       e.preventDefault()
         if(!person.name||!person.password){
            setError("Please fill all the Details")
            return
         }
      
         try{
            let response= await axios.post("https://dummyjson.com/auth/login",{
                username:person.name,
                password:person.password
            },{
                headers:{
                    "Content-Type":'application/json'
                }
            })

            setError("")
            console.log(response.data)
            setId(response.data.id)
            localStorage.setItem("id",response.data.id)
            navigate("/profile")
            
         }

         catch(error){
            setError(error.response.data.message)
         }


    }

    return (
        <div>
            <div className="login-form">

                <form action="">
                    <div className="heading">
                        <p>Welcome Back 👋</p>
                        <h1>Sign into your account</h1>
                    </div>

                    <div className="input-item">
                        <label htmlFor="name">Your Username</label>
                        <input type="text" id="name" onChange={(e)=>{setPerson({...person,name:e.target.value})}} value={person.name}/>
                    </div>

                    <div className="input-item">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password"onChange={(e)=>{setPerson({...person,password:e.target.value})}} value={person.password} />
                    </div>

                    <button onClick={authenicatingUser}>Login</button>
                    {
                    error && (<p>{error}</p>)
                }

                </form>



            </div>

            <div className="footer">
                <p> Do not have a account? <Link to="/Signup"> Signup</Link> </p>
               
            </div>

        </div>



    )
}

export default Login
import React, { useContext ,useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import IdContext from "../Context/IdContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {

 let id= localStorage.getItem("id")
  let [user,setUser]=useState({})
  let navigate=useNavigate()
  
 
  useEffect(()=>{
      async  function fetchData(){
        try{
            let response= await fetch(`https://dummyjson.com/users/${id}`)
            let data= await response.json()
            setUser(data)
        }
         catch(error){
            console.log(error)
         } 
       }
       if(id){
        fetchData()
       }
     
       
  },[])

    function logoutUser(){
      localStorage.removeItem("id")
     navigate("/")
       
    }

    return (
        <div>
            <div className="profile-page">

                <div className="profile-section">

                    <img src={`${user.image}`} />

                    <p>Name:{`${user.firstName} ${user.lastName}`}</p>
                    <p>Age:{`${user.age}`}</p>
                    <p>Gender:{`${user.gender}`}</p>
                    <p>Birth Date:{`${user.birthDate}`}</p>

                    <button onClick={logoutUser}>Logout</button>

                </div>



            </div>

            

        </div>



    )
}

export default Profile



import React, { useState } from "react";

import IdContext from "./IdContext";


const IdProvider=(props)=>{

    let [id,setId] =useState("")
    
    return(
        <IdContext.Provider value={{id ,setId}} >
           
     
          {props.children}

        </IdContext.Provider>
    )

}

export default IdProvider
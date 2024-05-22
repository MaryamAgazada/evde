import { set } from "mongoose";
import {  createContext, useState }from "react";

export const BasketContext=createContext
import React from 'react'

export const basketContextProvider=(children)=> {
    let [basket,setBasket]=useState([])
    return (
        <div>
          <BasketContext.Provider value={{basket,setBasket}}>{children}</BasketContext.Provider>
        </div>
      )
}



export default basketContextProvider

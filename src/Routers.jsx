import React from "react";
import {  createBrowserRouter }from "react-router-dom";
import Home from './Home';
import Install from './Install';
import Exemplo from './Exemplo';


const Rotas = createBrowserRouter([
{
    path:"/",
    element: <Home />
},
{
    path:"/Install",
    element: <Install />
},
{
    path:"/Exemplo",
    element: <Exemplo />
}

])

    

export default Rotas;
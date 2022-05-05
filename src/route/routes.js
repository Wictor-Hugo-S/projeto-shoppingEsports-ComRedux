import HomePage from '../page/home'
import ContatoPage from '../page/contato'

import React from "react";
import {Routes,Route} from 'react-router-dom'


const MainRoutes=()=>{
    return(
        <Routes>
            <Route exact path="/" element={<HomePage/>}/>
            <Route exact path="/contato" element={<ContatoPage/>}/>
        </Routes>
    )
}
export default MainRoutes
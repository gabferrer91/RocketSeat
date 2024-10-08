import { Routes, Route, Navigate } from 'react-router-dom'

import {SignIn} from '../src/pages/SignIn'
import {SignUp} from '../src/pages/SignIup'

export function AuthRoutes() {
    const user = localStorage.getItem("@rocketnotes:user");
    return (
    <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
        
        { !user && <Route path="*" element={<Navigate to="/signin"/>} /> }
    </Routes>
    )
}


import {Routes, Route} from 'react-router-dom'

import {SignIn} from '../src/pages/SignIn'
import {SignUp} from '../src/pages/SignIup'

export function AuthRoutes() {
    return (
    <Routes>
        <Route path="/" element={<SignIn/>}/>
        <Route path="/register" element={<SignUp/>}/>
    </Routes>
    )
}
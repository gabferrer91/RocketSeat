import {Routes, Route} from 'react-router-dom'


// app
/*
import {Home} from '../pages/Home'
import {CreateMovie} from '../pages/CreateMovie'
import {MoviePreview} from '../pages/MoviePreview'
import {User} from '../pages/User'
 */


// auth
import {SignIn} from '../pages/SignIn'
import {SignOut} from '../pages/SignOut'


export function AuthRoutes() {
    return (
    <Routes>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignOut" element={<SignOut/>}/>
    </Routes>
    )
}

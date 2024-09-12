import {Routes, Route} from 'react-router-dom'


// app
import {Home} from '../pages/Home'
import {CreateMovie} from '../pages/CreateMovie'
import {MoviePreview} from '../pages/MoviePreview'
import {User} from '../pages/User'


// auth
/*
import {SignIn} from '../pages/SignIn'
import {SignOut} from '../pages/SignOut'
*/ 
 


export function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/CreateMovie" element={<CreateMovie/>}/>
        <Route path="/MoviePreview" element={<MoviePreview/>}/>
        <Route path="/User" element={<User/>}/>
    </Routes>
    )
}


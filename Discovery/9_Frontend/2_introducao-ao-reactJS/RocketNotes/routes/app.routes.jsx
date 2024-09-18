//npm install react-router-dom

import {Routes, Route, Navigate} from 'react-router-dom'

import {New} from '../src/pages/New'
import {Home} from '../src/pages/home'
import {Profile} from '../src/pages/Profile'
import {Details} from '../src/pages/details'

export function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/new" element={<New/>}/>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/details/:id" element={<Details/>}/>
        <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
    )
}
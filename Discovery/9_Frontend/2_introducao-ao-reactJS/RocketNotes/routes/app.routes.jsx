import {Routes, Route} from 'react-router-dom'

import {Home} from '../src/pages/home'
import {New} from '../src/pages/New'
import {Profile} from '../src/pages/Profile'
import {Details} from '../src/pages/details'

export function AppRoutes() {
    return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/New" element={<New/>}/>
        <Route path="/Profile" element={<Profile/>}/>
        <Route path="/Details/:id" element={<Details/>}/>
    </Routes>
    )
}
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NotFound from './components/general-comps/NotFound'
import HomePage from './components/home-comps/HomePage'

const AppRoutes=()=> {
    return (
        <Router>
            <Routes>
                <Route index element={<HomePage />} />

                {/*   (*) => Rest of routes!?!?  */}
                <Route path='*' element={<NotFound />} />


            </Routes>
        </Router>
    )
}

export default AppRoutes;

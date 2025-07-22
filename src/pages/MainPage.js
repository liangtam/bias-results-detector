import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./home/Home";
import NavBar from "../components/nav-bar/NavBar";

const MainPage = () => {

    const wrapNavbar = (page) => {
        return (
            <>
                <NavBar/>
                {page}
            </>
        )
    }
    return (
        <div className="main-page">
            <BrowserRouter>
                <Routes>
                    <Route exact path="home" element={wrapNavbar(<Home/>)}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainPage;
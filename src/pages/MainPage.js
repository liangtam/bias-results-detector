import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from "./home/HomePage";

const MainPage = () => {
    return (
        <div className="main-page">
            <BrowserRouter>
                <Routes>
                    <Route exact path="home" element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default MainPage;
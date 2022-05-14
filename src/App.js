import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserData from "./Components/Context";

import HomePage from "./Components/HomePage";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <UserData>
                    <Route path="/" element={<HomePage />} />
                </UserData>
            </Routes>
        </BrowserRouter>
    )
}
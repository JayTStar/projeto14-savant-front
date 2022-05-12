import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/header-test" element={<Header/>} />
            </Routes>
        </BrowserRouter>
    )
}
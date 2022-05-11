import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/SignUpScreen";
import Login from "./Components/LoginScreen";

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/sign-up" element={<Signup/>} />
            </Routes>
        </BrowserRouter>
    )
}
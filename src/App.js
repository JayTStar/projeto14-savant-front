import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Components/SignUpScreen";
import Login from "./Components/LoginScreen";
import UserData from "./Components/Context";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

import HomePage from "./Components/HomePage";

export default function App(){
    return(
        <UserData>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login/>} />
                    <Route path="/sign-up" element={<Signup/>} />
                    <Route path="/" element={<HomePage />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                </Routes>
            </BrowserRouter>
        </UserData>
    )
}
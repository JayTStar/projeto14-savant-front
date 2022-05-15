import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserData from "./contexts/UserContext";
import GenrePool from "./contexts/GenresContext";

import Signup from "./Components/SignUpScreen";
import Login from "./Components/LoginScreen";
import HomePage from "./Components/HomePage";

export default function App() {

    return (
        <GenrePool>
        <UserData>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/" element={<HomePage />} />
                </Routes>
            </BrowserRouter>
        </UserData>
        </GenrePool>
    )
}
import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserData from "./contexts/UserContext";
import GenrePool from "./contexts/GenresContext";

import Signup from "./Components/SignUpScreen";
import Login from "./Components/LoginScreen";
import HomePage from "./Components/HomePage";
import GenrePage from "./Components/GenrePage";

export default function App() {
    const genres = ["Aventura", "Ficção", "Autoajuda", "HQs e Mangás"];

    return (
        <GenrePool> 
        <UserData>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/" element={<HomePage />} />
                    {genres.map((genre, index) => {
                        const genreURL = genre.toLowerCase().replaceAll("ç", "c").replaceAll("á", "a").replaceAll("ã", "a").replaceAll(" ", "%20");
                        return <Route key={index} path={`/${genreURL}`} element={<GenrePage genre={genre} />} />
                    })}
                </Routes>
            </BrowserRouter>
        </UserData>
        </GenrePool>
    )
}
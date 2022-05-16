import { BrowserRouter, Routes, Route } from "react-router-dom";

import UserData from "./contexts/UserContext";
import GenrePool from "./contexts/GenresContext";

import Signup from "./Components/SignUpScreen";
import Login from "./Components/LoginScreen";
import Cart from "./Components/Cart";
import Checkout from "./Components/Checkout";

import HomePage from "./Components/HomePage";
import GenrePage from "./Components/GenrePage";
import ProductPage from "./Components/ProductPage";

export default function App() {
    const genres = ["Aventura", "Ficção", "Autoajuda", "HQs e Mangás"];

    return (
        <GenrePool> 
        <UserData>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/sign-up" element={<Signup />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/:productId" element={<ProductPage />} />
                    {genres.map((genre, index) => {
                        const genreURL = genre.toLowerCase().replaceAll("ç", "c").replaceAll("á", "a").replaceAll("ã", "a").replaceAll(" ", "");
                        return <Route key={index} path={`/${genreURL}`} element={<GenrePage genreURL={genreURL} genre={genre} />} />
                    })}
                </Routes>
            </BrowserRouter>
        </UserData>
        </GenrePool>
    )
}
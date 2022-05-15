import { useState, useEffect, useContext } from "react";

export default function GenrePage({genre}){
    // const URL = "https://savant-e-commerce.herokuapp.com/products"; //dev link: 'http://localhost:5000/products'; heroku: "https://savant-e-commerce.herokuapp.com/products";
    // const [productsLists, setProductsLists] = useState([]);
    // const { genres } = useContext(GenrePool);

    // function comparator() {
    //     return Math.random() - 0.5;
    // }

    // useEffect( () => {
    //         const promise = axios.get(URL);
    //         promise.then((response) => setProductsLists(response.data));
    //         promise.catch((e) => console.log(e));
    // }, []);

    console.log(genre)
    return(
        <h1>{genre}</h1>
    );
}
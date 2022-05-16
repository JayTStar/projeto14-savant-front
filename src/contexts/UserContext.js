import { createContext, useState ,useContext} from "react";

export const UserData = createContext();

export default function Provider({ children }){
    const [userInfo, setUserInfo] = useState("");
    const [token, setToken] = useState("");
    const [cart, setCart] = useState([
        {title:"1 Harry Potter e a pedra filosofal", price:"24.30", author:"J.K. Rowling", genre:"aventura", synopsis:"Deveria ser um livro só para o público infanto-juvenil. Mas, no mundo ...", image:"https://images-na.ssl-images-amazon.com/images/I/518mqZ7A31L._SX332_BO..."},
        {title:"2 Harry Potter e a pedra filosofal", price:"24.10", author:"J.K. Rowling", genre:"aventura", synopsis:"Deveria ser um livro só para o público infanto-juvenil. Mas, no mundo ...", image:"https://images-na.ssl-images-amazon.com/images/I/518mqZ7A31L._SX332_BO..."},
        {title:"3 Harry Potter e a pedra filosofal", price:"24.50", author:"J.K. Rowling", genre:"aventura", synopsis:"Deveria ser um livro só para o público infanto-juvenil. Mas, no mundo ...", image:"https://images-na.ssl-images-amazon.com/images/I/518mqZ7A31L._SX332_BO..."},
        {title:"4 Harry Potter e a pedra filosofal", price:"24.80", author:"J.K. Rowling", genre:"aventura", synopsis:"Deveria ser um livro só para o público infanto-juvenil. Mas, no mundo ...", image:"https://images-na.ssl-images-amazon.com/images/I/518mqZ7A31L._SX332_BO..."},
    ]);

    return(
        <UserData.Provider value={{userInfo, setUserInfo, token, setToken, cart, setCart}}>
            {children}
        </UserData.Provider>
    )
}

export function useUser(){
    const user = useContext(UserData);
    const {userInfo, setUserInfo} = user;

    return {userInfo, setUserInfo};
}

export function useToken(){
    const userToken = useContext(UserData);
    const {token, setToken} = userToken;

    return {token, setToken};
}

export function useCart(){
    const userCart = useContext(UserData);
    const {cart, setCart} = userCart;

    return {cart, setCart}
}
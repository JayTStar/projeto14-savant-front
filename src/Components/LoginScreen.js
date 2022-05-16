import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SavantLogo from "../Midia/Savant-logo.png";
import axios from "axios";
import { useUser, useToken } from "../contexts/UserContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate();

    const { setToken } = useToken();
    const { setUserInfo } = useUser();

    const loginInfo = {
        email: email,
        password: password
    }

    async function handleClick() {
        try {
            const req = await axios.post("https://savant-e-commerce.herokuapp.com/sign-in", loginInfo);
            const { token, userId, userName } = req.data;

            setInterval(() => uspdateStatus(token, userId), 5000);

            setToken(token);

            setUserInfo({
                id: userId,
                name: userName
            })

            nav("/");
        }
        catch (err) {
            console.log(err);
        }
    }

    function uspdateStatus(token, userId) {
        axios.post("https://savant-e-commerce.herokuapp.com/status", { userId }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    }

    return (
        <Page>
            <Logo onClick={() => { nav("/") }} src={SavantLogo}></Logo>
            <Form>
                <Email type="email" placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}}></Email>
                <Password type="password" placeholder="Senha" onChange={(e) => {setPassword(e.target.value)}}></Password>
            </Form>
            <Button onClick={handleClick}>Login</Button>
            <Signup to={{ pathname: "/sign-up" }}>Não tem conta? Cadastre-se aqui</Signup>
        </Page>
    )
}

const Page = styled.main`
    width:100vw;
    height: 100vh;
    background: #064973;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Logo = styled.img`
    height: 16%;
`
const Form = styled.form`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const Email = styled.input`
    width: 60%;
    height: 30%;

    background-color: #C4C4C4;
    border-radius: 5px;

    border: none;
    margin-bottom: 2%;
`
const Password = Email;

const Button = styled.button`
    width: 40%;
    height: 7%;
    background: #49728C;
    border: none;
    border-radius: 5px;

    font-weight: 400;
    font-size: 18px;
    line-height: 29px;

    color: #C4C4C4;

    margin-bottom: 20%;
`
const Signup = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #FFFFFF;
`
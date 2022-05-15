import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SavantLogo from "../Midia/Savant-logo.png";
import axios from "axios";
import { useUser, useToken } from "../contexts/UserContext";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nav = useNavigate();

    const {setToken} = useToken();
    const {setUserInfo} = useUser();


    const loginInfo = {
        email: email,
        password: password
    }

    async function handleClick(){
        try{
            const req = await axios.post("https://savant-e-commerce.herokuapp.com/sign-in", loginInfo);

            const {token, userId, userName} = req;

            setToken(token);

            setUserInfo({
                id: userId,
                name: userName
            })

            nav("/");
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <Page>
            <Logo src={SavantLogo}></Logo>
            <Form>
                <Email placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}}></Email>
                <Password placeholder="Senha" onChange={(e) => {setPassword(e.target.value)}}></Password>
            </Form>
            <Button onClick={handleClick}>Login</Button>
            <Signup to={{pathname:"/sign-up"}}>Não tem conta? Cadastre-se aqui</Signup>
        </Page>
    )
}

const Page = styled.main`
    width:100%;
    height: 100%;
    background: #064973;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Logo = styled.img`
    width: auto;
    height:20%;
`
const Form = styled.form`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Email = styled.input`
    width: 60%;
    height: 30%;

    background-color: #C4C4C4;
    border-radius: 5px;

    border: none;
`
const Password = Email;

const Button = styled.button`
    width: 50%;
    height: 10%;
    background: #49728C;
    border: none;

    font-weight: 400;
    font-size: 24px;
    line-height: 29px;

    color: #C4C4C4;
`
const Signup = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #FFFFFF;
`
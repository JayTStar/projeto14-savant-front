import styled from "styled-components";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SavantLogo from "../Midia/Savant-logo.png";

export default function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const nav = useNavigate();

    const usersInfo = {
        firstName: firstName,
        lastName:lastName,
        email: email,
        password: password
    }

    async function handleClick(){
        if(password !== confirmation){
            alert("As senhas informadas não batem");
        }
        else{
            postUser();
        }
    }

    async function postUser(){
        try{
            await axios.post("https://savant-e-commerce.herokuapp.com/sign-up", usersInfo);
            console.log("Deu bom");
            nav("/login");
        } 
        catch(err){
            console.log(err)
        }
    }

    return(
        <Page>
            <Logo onClick={() => {nav("/")}} src={SavantLogo}></Logo>
            <Form>
                <FirstName placeholder="Nome" onChange={(e) => {setFirstName(e.target.value)}}></FirstName>
                <LastName placeholder="Sobrenome" onChange={(e) => {setLastName(e.target.value)}}></LastName>
                <Email placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}}></Email>
                <Password type={"password"} placeholder="Senha" onChange={(e) => {setPassword(e.target.value)}}></Password>
                <PasswordComfim type={"password"} placeholder="Confirme a senha" onChange={(e) => {setConfirmation(e.target.value)}}></PasswordComfim>
            </Form>
            <Button onClick={handleClick}>Cadastrar</Button>
            <Login to={{pathname:"/login"}}>Já possui conta? Faça o login aqui</Login>
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
    height:16%;
    margin-bottom: 2%;
`
const Form = styled.form`
    width: 100%;
    height: 35%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 5%;
`
const FirstName = styled.input`
    width: 60%;
    height: 30%;

    background-color: #C4C4C4;
    border-radius: 5px;

    border: none;
    margin-bottom: 2%;
`
const LastName = FirstName;
const Email = FirstName;
const Password = FirstName;
const PasswordComfim = FirstName;

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
const Login = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #FFFFFF;
`
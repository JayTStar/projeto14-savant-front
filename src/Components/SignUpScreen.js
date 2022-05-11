import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Signup(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const usersInfo = {
        firstName: firstName,
        lastName:lastName,
        email: email,
        password: password,
        confirmation: confirmation
    }

    function handleClick(){
        if(password !== confirmation){
            alert("As senhas não batem");
        }
        else{

        }
    }
    return(
        <Page>
            <Logo></Logo>
            <Form>
                <FirstName placeholder="Nome" onChange={(e) => {setFirstName(e.target.value)}}></FirstName>
                <LastName placeholder="Nome" onChange={(e) => {setLastName(e.target.value)}}></LastName>
                <Email placeholder="E-mail" onChange={(e) => {setEmail(e.target.value)}}></Email>
                <Password placeholder="Senha" onChange={(e) => {setPassword(e.target.value)}}></Password>
                <PasswordComfim placeholder="Confirme a senha" onChange={(e) => {setConfirmation(e.target.value)}}></PasswordComfim>
            </Form>
            <Button onClick={handleClick}>Cadastrar</Button>
            <Login to={{pathname:"/login"}}>Já possui conta? Faça o login aqui</Login>
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

`
const Form = styled.form`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const FirstName = styled.input`
    width: 60%;
    height: 15%;

    background-color: #C4C4C4;
    border-radius: 5px;

    border: none;
`
const LastName = FirstName;
const Email = FirstName;
const Password = FirstName;
const PasswordComfim = FirstName;

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
const Login = styled(Link)`
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;

    color: #FFFFFF;
`
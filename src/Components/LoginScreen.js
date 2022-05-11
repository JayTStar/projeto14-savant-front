import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleClick(){

    }

    return(
        <Page>
            <Logo></Logo>
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

`
const Form = styled.form`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
const Email = styled.input`
    width: 60%;
    height: 20%;

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
import styled from "styled-components";
import { useState } from "react";

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
        </Page>
    )
}

const Page = styled.main`

`
const Logo = styled.img`

`
const Form = styled.form`

`
const FirstName = styled.input`

`
const LastName = FirstName;
const Email = FirstName;
const Password = FirstName;
const PasswordComfim = FirstName;

const Button = styled.button`

`
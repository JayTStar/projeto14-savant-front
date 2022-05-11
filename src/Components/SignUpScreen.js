import styled from "styled-components";
import { useState } from "react";

export default function Signup(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmation, setConfirmation] = useState("");

    const usersInfo = {
        name: name,
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
                <Name placeholder="Nome" onChange={(e) => {setName(e.target.value)}}></Name>
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
const Form = styled.form`

`
const Name = styled.input`

`
const Email = Name;
const Password = Name;
const PasswordComfim = Name;

const Button = styled.button`

`
import styled from "styled-components";
import { useState } from "react";

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
        </Page>
    )
}

const Page = styled.main`

`
const Logo = styled.img`

`
const Form = styled.form`

`
const Email = styled.input`

`
const Password = Name;

const Button = styled.button`

`
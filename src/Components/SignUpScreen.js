import styled from "styled-components";

export default function Signup(){
    return(
        <Page>
            <Logo></Logo>
            <Form>
                <Name></Name>
                <Email></Email>
                <Password></Password>
                <PasswordComfim></PasswordComfim>
            </Form>
            <Button></Button>
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
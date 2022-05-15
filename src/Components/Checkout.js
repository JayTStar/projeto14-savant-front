import styled from "styled-components";
import Logo from "../Midia/Savant-logo.svg"
import {useState, useEffect} from "react"
import { useCart } from "./Context";

export default function Checkout(){
    const [state,setState] = useState(false);

    useEffect(() => {
        console.log(state);
        toggle(state);
    }, [state])
    return(
        <Page>
            <header> <img src={Logo}/></header>

            <Products>
                <ion-icon name="chevron-down-circle-outline" onClick={() => {(state === false) ? setState(true) : setState(false)}}></ion-icon>
                <p>Ver detalhes do pedido</p>
                <p></p>
            </Products>

            <ShippingInfo>
                <h2>Dados do destinatário</h2>
                <form>
                    <input placeholder="Nome"/>
                    <input placeholder="Sobrenome"/>
                    <input placeholder="Telefone"/>
                </form>
            </ShippingInfo>
            <Adress>
                <h2>Endereço do destinatário</h2>
                <form>
                    <input placeholder="Endereço"/>
                    <input placeholder="Número"/>
                    <input placeholder="Complemento"/>
                    <input placeholder="Bairro"/>
                    <input placeholder="Cidade"/>
                    <input placeholder="CEP"/>
                    <input placeholder="Estado"/>
                </form>
            </Adress>
            <Payment>
                <h2>Pagamento</h2>
                <form>
                    <input placeholder="Número do Cartão"/>
                    <input placeholder="Nome no Cartão"/>
                    <input placeholder="Vencimento"/>
                    <input placeholder="CVV"/>
                </form>
            </Payment>
            <button>Finalizar</button>
        </Page>
    )
}

function toggle(state){
    return (state === true)? "auto" : "10%"; 
}

const Page = styled.main`
    width: 100%;
    height: 100%;

    position: relative;

    header{
        width: 100%;
        height: 10%;

        background-color: #064973;

        display: flex;
        justify-content: center;
    }
    
    img{
        width: auto;
        height: 100%;
    }
    input{
        width: 90%;
        height: 40px;

        margin: 5px 0;

        border-radius: 10px;
        border: 2px solid #C4C4C4;
    }

    section{
        margin: 10px 0;
    }

    button{
        width: 50%;
        height: 40px;

        background-color: #064973;

        border: none;
        box-sizing: border-box;

        border-radius: 40px;

        position: absolute;

        left: 25%;
    }
`
const Products = styled.div`
    width: 100%;
    height: ${toggle};

    display: flex;
    align-items: center;
    justify-content: space-between;

    border: 1px solid #C4C4C4;

    box-sizing: border-box;
    padding: 10px;

    ion-icon{
        font-size: 20px;
    }
`
const ShippingInfo = styled.section`
    width: 100%;
    height: auto;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Adress = styled.section`
    width: 100%;
    height: auto;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
const Payment = styled.section`
    width: 100%;
    height: auto;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`
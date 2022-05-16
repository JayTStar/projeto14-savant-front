import styled from "styled-components";
import Logo from "../Midia/Savant-logo.svg"
import {useState} from "react"
import { useCart, useUser } from "../contexts/UserContext";

export default function Checkout(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");

    const [street, setStreet] = useState("");
    const [number, setNumber] = useState("");
    const [complement, setComplement] = useState("");
    const [district, setDistricst] = useState("");
    const [city, setcity] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [state, setState] = useState("");

    const [cardNumber, setCardNumber] = useState("");
    const [cardName, setCardName] = useState("");
    const [valid, setValid] = useState("");
    const [CVV, setCVV] = useState("");
    const [installment, setInstallment] = useState("");

    const lastFour = cardNumber.substr(cardNumber.length - 4);

    const {cart} = useCart();
    const {user} = useUser();

    let totalPrice = 0;

    cart.map(product => {totalPrice += parseFloat(product.price)});

    const orderInfo ={
        userID: user.id,
        items: cart,
        total: totalPrice,
        deliverTo: `${firstName} ${lastName}`,
        contact: phone,
        street: street,
        number: number,
        complement: complement,
        district: district,
        city: city,
        ZIP: zipCode,
        state: state,

        paymentMethod: "card",
        card: lastFour,
        installment: installment
    }

    function postOrder(){
        console.log(orderInfo);
    }

    return(
        <Page>
            <header> <img src={Logo}/></header>

            <CartData>
                <p>Qtd: {cart.length}</p> <p>Total: {totalPrice.toFixed(2)}</p>
            </CartData>

            <ShippingInfo>
                <h2>Dados do destinatário</h2>
                <form>
                    <input placeholder="Nome" onChange={(e) => {setFirstName(e.target.value)}}/>
                    <input placeholder="Sobrenome" onChange={(e) => {setLastName(e.target.value)}}/>
                    <input placeholder="Telefone" onChange={(e) => {setPhone(e.target.value)}}/>
                </form>
            </ShippingInfo>
            <Adress>
                <h2>Endereço do destinatário</h2>
                <form>
                    <input placeholder="Endereço" onChange={(e) => {setStreet(e.target.value)}}/>
                    <input placeholder="Número" onChange={(e) => {setNumber(e.target.value)}}/>
                    <input placeholder="Complemento" onChange={(e) => {setComplement(e.target.value)}}/>
                    <input placeholder="Bairro" onChange={(e) => {setDistricst(e.target.value)}}/>
                    <input placeholder="Cidade" onChange={(e) => {setcity(e.target.value)}}/>
                    <input placeholder="CEP" onChange={(e) => {setZipCode(e.target.value)}}/>
                    <select onChange={(e) => {setState(e.target.value)}}>
                        <option value="">Selecionar Estado</option>
                        <option value="Acre">Acre</option>
                        <option value="Alagoas">Alagoas</option>
                        <option value="Amapá">Amapá</option>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Bahia">Bahia</option>
                        <option value="Ceará">Ceará</option>
                        <option value="Distrito Federal">Distrito Federal</option>
                        <option value="Espírito Santo">Espírito Santo</option>
                        <option value="Goiás">Goiás</option>
                        <option value="Maranhão">Maranhão</option>
                        <option value="Mato Grosso">Mato Grosso</option>
                        <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                        <option value="Minas Gerais">Minas Gerais</option>
                        <option value="Pará">Pará</option>
                        <option value="Paraíba">Paraíba</option>
                        <option value="Paraná">Paraná</option>
                        <option value="Pernambuco">Pernambuco</option>
                        <option value="Piauí">Piauí</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                        <option value="Rondônia">Rondônia</option>
                        <option value="Rorâima">Rorâima</option>
                        <option value="Santa Catarina">Santa Catarina</option>
                        <option value="São Paulo">São Paulo</option>
                        <option value="Sergipe">Sergipe</option>
                        <option value="Tocantins">Tocantins</option>
                    </select>
                </form>
            </Adress>
            <Payment>
                <h2>Pagamento</h2>
                <form>
                    <input placeholder="Número do Cartão" onChange={(e) => {setCardNumber(e.target.value)}}/>
                    <input placeholder="Nome no Cartão" onChange={(e) => {setCardName(e.target.value)}}/>
                    <input placeholder="Vencimento" onChange={(e) => {setValid(e.target.value)}}/>
                    <input placeholder="CVV" onChange={(e) => {setCVV(e.target.value)}}/>
                    <select onChange={(e) => {setInstallment(e.target.value)}}>
                        <option value={(totalPrice).toFixed(2)}>1X de {(totalPrice).toFixed(2)}</option>
                        <option value={(totalPrice/2).toFixed(2)}>2X de {(totalPrice/2).toFixed(2)}</option>
                        <option value={(totalPrice/3).toFixed(2)}>3X de {(totalPrice/3).toFixed(2)}</option>
                        <option value={(totalPrice/4).toFixed(2)}>4X de {(totalPrice/4).toFixed(2)}</option>
                        <option value={(totalPrice/5).toFixed(2)}>5X de {(totalPrice/5).toFixed(2)}</option>
                        <option value={(totalPrice/6).toFixed(2)}>6X de {(totalPrice/6).toFixed(2)}</option>
                        <option value={(totalPrice/7).toFixed(2)}>7X de {(totalPrice/7).toFixed(2)}</option>
                        <option value={(totalPrice/8).toFixed(2)}>8X de {(totalPrice/8).toFixed(2)}</option>
                        <option value={(totalPrice/9).toFixed(2)}>9X de {(totalPrice/9).toFixed(2)}</option>
                        <option value={(totalPrice/10).toFixed(2)}>10X de {(totalPrice/10).toFixed(2)}</option>
                    </select>
                </form>
            </Payment>
            <button onClick={postOrder}>Finalizar</button>
        </Page>
    )
}

function toggle(state){
    return (state === true)? "auto" : "10%"; 
}

const Page = styled.main`
    width: 100%;
    height: 100%;

    display:flex;
    flex-direction: column;

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

        color: #064973;
    }

    select{
        width: 90%;
        height: 40px;

        margin: 5px 0;

        border-radius: 10px;
        border: 2px solid #C4C4C4;

        background-color: #FFFFFF;

        color:#064973;
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

        margin: 10px auto;
    }
`
const CartData = styled.div`
    width: 100%;
    height: 50px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
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
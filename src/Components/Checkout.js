import styled from "styled-components";
import Logo from "../Midia/Savant-logo.svg"
import {useState} from "react"
import { useCart, useUser } from "../contexts/UserContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Checkout(){
    const URL = "https://savant-e-commerce.herokuapp.com/orders"

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
    const {userInfo} = useUser();
    const nav = useNavigate();

    let totalPrice = 0;

    cart.map(product => {totalPrice += parseFloat(product.price)});

    const orderInfo ={
        userID: userInfo.id,
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

    async function postOrder(){
        console.log(orderInfo);
        
        try{
            const req = await axios.post(URL, orderInfo);

            if(req.status === 201){
                alert("Pedido realizado");

                nav("/");
            }
        }
        catch(err){
            console.log(err);

            alert("Erro ao realizar a compra");
        }
    }

    return(
        <Page>
            <header> <img src={Logo}/></header>

            <CartData>
                <p>Qtd: {cart.length}</p> <p>Total: {totalPrice.toFixed(2)}</p>
            </CartData>

            <ShippingInfo>
                <h2>Dados do destinat??rio</h2>
                <form>
                    <input placeholder="Nome" onChange={(e) => {setFirstName(e.target.value)}}/>
                    <input placeholder="Sobrenome" onChange={(e) => {setLastName(e.target.value)}}/>
                    <input placeholder="Telefone" onChange={(e) => {setPhone(e.target.value)}}/>
                </form>
            </ShippingInfo>
            <Adress>
                <h2>Endere??o do destinat??rio</h2>
                <form>
                    <input placeholder="Endere??o" onChange={(e) => {setStreet(e.target.value)}}/>
                    <input placeholder="N??mero" onChange={(e) => {setNumber(e.target.value)}}/>
                    <input placeholder="Complemento" onChange={(e) => {setComplement(e.target.value)}}/>
                    <input placeholder="Bairro" onChange={(e) => {setDistricst(e.target.value)}}/>
                    <input placeholder="Cidade" onChange={(e) => {setcity(e.target.value)}}/>
                    <input placeholder="CEP" onChange={(e) => {setZipCode(e.target.value)}}/>
                    <select onChange={(e) => {setState(e.target.value)}}>
                        <option value="">Selecionar Estado</option>
                        <option value="Acre">Acre</option>
                        <option value="Alagoas">Alagoas</option>
                        <option value="Amap??">Amap??</option>
                        <option value="Amazonas">Amazonas</option>
                        <option value="Bahia">Bahia</option>
                        <option value="Cear??">Cear??</option>
                        <option value="Distrito Federal">Distrito Federal</option>
                        <option value="Esp??rito Santo">Esp??rito Santo</option>
                        <option value="Goi??s">Goi??s</option>
                        <option value="Maranh??o">Maranh??o</option>
                        <option value="Mato Grosso">Mato Grosso</option>
                        <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
                        <option value="Minas Gerais">Minas Gerais</option>
                        <option value="Par??">Par??</option>
                        <option value="Para??ba">Para??ba</option>
                        <option value="Paran??">Paran??</option>
                        <option value="Pernambuco">Pernambuco</option>
                        <option value="Piau??">Piau??</option>
                        <option value="Rio de Janeiro">Rio de Janeiro</option>
                        <option value="Rio Grande do Norte">Rio Grande do Norte</option>
                        <option value="Rio Grande do Sul">Rio Grande do Sul</option>
                        <option value="Rond??nia">Rond??nia</option>
                        <option value="Ror??ima">Ror??ima</option>
                        <option value="Santa Catarina">Santa Catarina</option>
                        <option value="S??o Paulo">S??o Paulo</option>
                        <option value="Sergipe">Sergipe</option>
                        <option value="Tocantins">Tocantins</option>
                    </select>
                </form>
            </Adress>
            <Payment>
                <h2>Pagamento</h2>
                <form>
                    <input placeholder="N??mero do Cart??o" onChange={(e) => {setCardNumber(e.target.value)}}/>
                    <input placeholder="Nome no Cart??o" onChange={(e) => {setCardName(e.target.value)}}/>
                    <input placeholder="Vencimento" onChange={(e) => {setValid(e.target.value)}}/>
                    <input placeholder="CVV" onChange={(e) => {setCVV(e.target.value)}}/>
                    <select onChange={(e) => {setInstallment(e.target.value)}}>
                        <option>Selecione o n??mero de parcelas</option>
                        <option value={`1X de ${(totalPrice).toFixed(2)}`}>1X de {(totalPrice).toFixed(2)}</option>
                        <option value={`2X de ${(totalPrice/2).toFixed(2)}`}>2X de {(totalPrice/2).toFixed(2)}</option>
                        <option value={`3X de ${(totalPrice/3).toFixed(2)}`}>3X de {(totalPrice/3).toFixed(2)}</option>
                        <option value={`4X de ${(totalPrice/4).toFixed(2)}`}>4X de {(totalPrice/4).toFixed(2)}</option>
                        <option value={`5X de ${(totalPrice/5).toFixed(2)}`}>5X de {(totalPrice/5).toFixed(2)}</option>
                        <option value={`6X de ${(totalPrice/6).toFixed(2)}`}>6X de {(totalPrice/6).toFixed(2)}</option>
                        <option value={`7X de ${(totalPrice/7).toFixed(2)}`}>7X de {(totalPrice/7).toFixed(2)}</option>
                        <option value={`8X de ${(totalPrice/8).toFixed(2)}`}>8X de {(totalPrice/8).toFixed(2)}</option>
                        <option value={`9X de ${(totalPrice/9).toFixed(2)}`}>9X de {(totalPrice/9).toFixed(2)}</option>
                        <option value={`10X de ${(totalPrice/10).toFixed(2)}`}>10X de {(totalPrice/10).toFixed(2)}</option>
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
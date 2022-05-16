import axios from "axios";
import { useState } from "react";
import styled from "styled-components";

export default function Shipping(){
    const URL = "https://savant-e-commerce.herokuapp.com/shipping";

    const [CEP, setCEP] = useState("")


    async function calcShipping(){
        try{
            const req = await axios.post(URL, CEP);

            console.log(req.response);
        }
        catch(err){
            console.log(err);
        }
    }

    return(
        <Block>
            <ion-icon name="airplane-outline"></ion-icon>
            <p>Calcular Frete</p>
            <input placeholder="CEP"></input>
            <button>Calcular</button>
        </Block>
    )
    
}


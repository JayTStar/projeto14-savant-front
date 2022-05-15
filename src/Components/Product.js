import { useNavigate } from "react-router-dom";
import styledComponents from "styled-components";

export default function Product({ product }) {
    const { image, title, price, author, _id } = product;
    let { productId } = product;
    const navigate = useNavigate();
    if (!productId) {
        productId = _id;
    }

    return (
        <Item onClick={() => navigate(`/${productId}`)}>
            <Image src={image} />
            <Title>{title}</Title>
            <Author>{author}</Author>
            <Price>{`R$ ${price}`}</Price>
        </Item>
    );
}


const Item = styledComponents.article`
    position: relative;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;
    width: 150px;
    height: 300px;
    margin: 10px 15px 10px 0;
    padding: 10px;
    border-radius: 10px;
    box-shadow: -2px 2px 3px 1px rgba(0, 0, 0, 0.2);
`;

const Image = styledComponents.img`
    width: 100%;
    margin-bottom: 5px;
`;

const Title = styledComponents.h2`
    font-size: 16px;
    font-weight: bold;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 32px;
    margin-bottom: 2px;
`;

const Author = styledComponents.p`
    font-size: 14px;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 2px;
`;

const Price = styledComponents.p`
    position: absolute;
    bottom: 10px;
    font-size: 16px;
    font-weight: bold;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 110px;
    margin-bottom: 2px;
`;
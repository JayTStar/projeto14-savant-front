import styled from "styled-components";

export default function Header(){
    return(
        <Head>
            <Top>
                <ion-icon name="menu-outline"></ion-icon>
                <Logo></Logo>
                <ion-icon name="person-circle-outline"></ion-icon>
                <ion-icon name="cart-outline"></ion-icon>
            </Top>
            <Search>
                <SearchBar></SearchBar>
                <ion-icon name="search-circle-outline"></ion-icon>
            </Search>
        </Head>
    )
}

const Head = styled.header`
    width: 100%;
    height: 10%;
`
const Top = styled.div`

`
const Logo = styled.img`

`
const Search = styled.div`

`
const SearchBar = styled.input`

`
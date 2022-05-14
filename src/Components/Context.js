import { createContext, useState ,useContext} from "react";

export const UserData = createContext();

export default function Provider({ children }){
    const [userInfo, setUserInfo] = useState("");
    const [token, setToken] = useState("");

    return(
        <UserData.Provider value={{userInfo, setUserInfo, token, setToken}}>
            {children}
        </UserData.Provider>
    )
}

export function useUser(){
    const user = useContext(UserData);
    const {userInfo, setUserInfo} = user;

    return {userInfo, setUserInfo};
}

export function useToken(){
    const userToken = useContext(UserData);
    const {token, setToken} = userToken;

    return {token, setToken};
}
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
    const [user, setUser] = useState({})
    const [users, setUsers] = useState([])
    const [logged, setLogged] = useState(false)
    const val = {user, setUser, logged, setLogged, users, setUsers}
    return(
        <UserContext.Provider value={val}>{props.children}</UserContext.Provider>
    )
    
}
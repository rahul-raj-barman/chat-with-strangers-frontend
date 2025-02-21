import UserContext from "./UserContext";
import { useState } from "react";


const UserContextProvider = ({children}) => {

    const [name, setName] = useState("")

    return (
        <UserContext.Provider value={{name, setName}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
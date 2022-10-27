import { createContext } from "react"
import { getUserType } from "../@types/redirectContext"
import GetUser from './hooks/userHooks'

const DEFAULT_VALUE = {
    getUserProfile: async () => {},
    user: undefined,
    idUser: "",
}

const ContextUser = createContext<getUserType >(DEFAULT_VALUE)

function UserProvider({ children }: any){
    const { getUserProfile, user, idUser } = GetUser()
    return(
        <ContextUser.Provider value={{ getUserProfile, user, idUser }}>
            {children}
        </ContextUser.Provider>
    )
}

export {ContextUser, UserProvider}
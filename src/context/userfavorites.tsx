import { createContext } from "react"
import { userFavoritesType } from "../@types/redirectContext"
import userFavorites from './hooks/userFavoritsHooks'

const DEFAULT_VALUE = {
    active: [],
    getFavorites: ()=> {},
    data: []
}

const ContextFvorites = createContext< userFavoritesType >(DEFAULT_VALUE)

function FavoritesProvider({ children }: any){
    const {active, getFavorites, data } = userFavorites()
    return(
        <ContextFvorites.Provider value={{ active, getFavorites, data }}>
            {children}
        </ContextFvorites.Provider>
    )
}

export {ContextFvorites, FavoritesProvider}
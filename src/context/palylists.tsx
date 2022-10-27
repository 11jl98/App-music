import { createContext } from "react"
import PlaylistsHooks from "./hooks/playlistsHooks"
// import { getPlaylistsUserType } from "../@types/redirectContext"

const DEFAULT_VALUE = {
    PlaylistsUser: async () => {} ,
    playlists: [],
    getPlaylistById: async () => {} ,
    playlistId: {}
}

const ContextPlaylists = createContext<any>(DEFAULT_VALUE)

function PlaylistsProvider({ children }: any){
    const {  PlaylistsUser, playlists, getPlaylistById, playlistId } = PlaylistsHooks()
    return(
        <ContextPlaylists.Provider value={{  PlaylistsUser, playlists, getPlaylistById, playlistId }}>
            {children}
        </ContextPlaylists.Provider>
    )
}
export {ContextPlaylists, PlaylistsProvider}
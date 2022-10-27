 import { userProfile } from "./user";

  export type redirectContextType = {
    promptAsync: () => void;
  };

  export type getUserType = {
    getUserProfile: ()=> Promise<void>;
    user: userProfile | undefined,
    idUser :string,
  };

  export type getPlaylistsUserType = {
    PlaylistsUser: () => Promise<void>;
    playlists: Array<any>,
    getPlaylistById: (id: string) => Promise<void>;
    playlistId: object | any
  }


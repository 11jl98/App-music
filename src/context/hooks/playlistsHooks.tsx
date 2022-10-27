import { useState, useEffect } from "react";
import { getPlaylistsUser, playlist } from "../../services/playlists";
import { playlistType } from "../../@types/playlist";

export default function Playlists() {
  const [playlists, setPlaylists] = useState<Array<any>>([]);
  const [playlistId, setPlaylist] = useState<playlistType | undefined>();

  async function PlaylistsUser() {
    try {

      const result = await getPlaylistsUser();
      
      setPlaylists(result);
    } catch (error) {
      console.log(error)
    }
  }

  async function getPlaylistById(playlisId: string) {
    try {
      const result = await playlist(playlisId)
      setPlaylist(result)
    } catch (error) {
      console.log(error)
    }
  }

  return { PlaylistsUser, playlists, getPlaylistById, playlistId };
}

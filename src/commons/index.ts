import { filterType } from "../@types/filter";

const filter: Array<filterType> = [
  { type: "playlists", value: "playlists", active: true, endpoint: "/users/31rwovczdvvktv4n3xrocr3o67cm/playlists", },
  { type: "artistas", value: "artisits", active: false, endpoint:"/me/top/artists", },
  { type: "musicas", value: "tracks", active: false, endpoint:"/me/top/tracks", },
  { type: "albuns", value: "albuns", active: false, endpoint:"/me/albums", },
];

export default filter;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard, Playlist_info } from "../components";
// import { genres } from "../assets/constants";
// import { useGetSongsByGenreQuery } from "../redux/services/shazamCore";
// import { useGetSongDetailsQuery } from "../redux/features/playerSlice";
import test from "./test.json";

const Playlists = () => {
  console.log(test);

  return (
    <div>
      {test.map((playlist) => (
        <Playlist_info
          playlist={playlist}
        />
      ))}
    </div>
  );
};

export default Playlists;

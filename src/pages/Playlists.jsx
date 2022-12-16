import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error, Loader, SongCard, Playlist_info } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";
import test from "./test.json";

const SongPlaylist = (PlaylistID,i) => {
  const dispatch = useDispatch();
  // const { PlaylistID } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongDetailsQuery(PlaylistID);

  return(
    <div>
      <SongCard
      key={song.key}
      song={song}
      isPlaying={isPlaying}
      activeSong={activeSong}
      data={data}
      i={i}
      />
    </div>
  )
}


const Playlists = () => {
  return (
    <div>
      {test.map((playlists) => (
        <div className=" m-5 rounded-br-3xl">
          <h1 className="font-bold text-7xl text-white text-left mt-4 mb-10">
            {playlists.name}
          </h1>
          <button className="bg-white	p-3 rounded-3xl"> view songs</button>
        </div>
      ))}
    </div>
  );
};

export default Playlists;

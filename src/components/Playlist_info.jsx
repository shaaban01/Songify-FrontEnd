import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";
// import { Error, Loader, SongCard } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const Playlist_info = (playlist_name, Playlist_song) => {
  const dispatch = useDispatch();
  const { SongId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongDetailsQuery(
    Playlist_song[0]
  );
  console.log(Playlist_song);

  // console.log(data);
  // console.log(playlist.playlist.name);
  return (
    // <></>
    <div>
      <h1>{playlist_name}</h1>
      <div className="flex">
        {Playlist_song.map((ps, index) => (
          <SongCard
            song={ps}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={index}
          />
        ))}
      </div>
    </div>
  );
};
export default Playlist_info;

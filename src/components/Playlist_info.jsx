import SongCard from "./SongCard";
import { useDispatch, useSelector } from "react-redux";
// import { Error, Loader, SongCard } from "../components";
import { useGetSongDetailsQuery } from "../redux/services/shazamCore";

const Playlist_info = (playlist) => {
  //   const dispatch = useDispatch();
  //   const { SongId } = useSelector((state) => state.player);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongDetailsQuery(
    554591360
  );
  console.log(playlist);
  console.log(playlist.playlist.name);
  return (
    // <></>
    <div>
      <h2>{playlist.playlist.name}</h2>
      <div className="flex flex-col">
        {playlist.playlist.songs.map((ps, index) => (
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

import React from 'react';
import { MdSkipNext, MdSkipPrevious, MdFavorite } from 'react-icons/md';
import {
  BsArrowRepeat,
  BsFillPauseFill,
  BsFillPlayFill,
  BsShuffle,
} from 'react-icons/bs';

import { RiPlayListAddFill } from 'react-icons/ri';

const Controls = ({
  isPlaying,
  repeat,
  setRepeat,
  shuffle,
  setShuffle,
  favorite,
  setFavorite,
  currentSongs,
  handlePlayPause,
  handlePrevSong,
  handleNextSong,
}) => (
  <div className="flex items-center justify-around md:w-36 lg:w-52 2xl:w-80">
    <RiPlayListAddFill
      size={20}
      color={repeat ? 'red' : 'white'}
      onClick={() => console.log('adding the playlist')}
      className="hidden sm:block cursor-pointer"
    />
    <BsArrowRepeat
      size={20}
      color={repeat ? 'red' : 'white'}
      onClick={() => setRepeat((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
    {currentSongs?.length && (
      <MdSkipPrevious
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={handlePrevSong}
      />
    )}
    {isPlaying ? (
      <BsFillPauseFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    ) : (
      <BsFillPlayFill
        size={45}
        color="#FFF"
        onClick={handlePlayPause}
        className="cursor-pointer"
      />
    )}
    {currentSongs?.length && (
      <MdSkipNext
        size={30}
        color="#FFF"
        className="cursor-pointer"
        onClick={handleNextSong}
      />
    )}
    <BsShuffle
      size={20}
      color={shuffle ? 'red' : 'white'}
      onClick={() => setShuffle((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />

    <MdFavorite
      size={20}
      color={favorite ? 'red' : 'white'}
      onClick={() => setFavorite((prev) => !prev)}
      className="hidden sm:block cursor-pointer"
    />
  </div>
);

export default Controls;

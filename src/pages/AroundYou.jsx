import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

import { Error, Loader, SongCard } from '../components';
import { useGetSongsByCountryQuery } from '../redux/services/shazamCore';
const countryCodes = [
  'DZ',
  'BY',
  'CI',
  'SN',
  'TN',
  'AU',
  'AT',
  'AZ',
  'AR',
  'BE',
  'BG',
  'BR',
  'GB',
  'HU',
  'VE',
  'VN',
  'GH',
  'DE',
  'GR',
  'DK',
  'EG',
  'ZM',
  'IL',
  'IN',
  'ID',
  'IE',
  'ES',
  'IT',
  'KZ',
  'CM',
  'CA',
  'KE',
  'CN',
  'CO',
  'CR',
  'MY',
  'MA',
  'MX',
  'MZ',
  'NG',
  'NL',
  'NZ',
  'NO',
  'AE',
  'PE',
  'PL',
  'PT',
  'RU',
  'RO',
  'SA',
  'SG',
  'US',
  'TH',
  'TZ',
  'TR',
  'UG',
  'UZ',
  'UA',
  'UY',
  'PH',
  'FI',
  'FR',
  'HR',
  'CZ',
  'CL',
  'CH',
  'SE',
  'ZA',
  'KR',
  'JP',
];
const CountryTracks = () => {
  const [country, setCountry] = useState('DZ');
  const [loading, setLoading] = useState(true);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data, isFetching, error } = useGetSongsByCountryQuery(country);

  useEffect(() => {
    axios
      .get(
        'https://geo.ipify.org/api/v1?apiKey=at_WWIWaGohCpV6zGEM6qEO1k5m1abzZ'
      )
      .then((res) =>
        countryCodes.find(res?.data?.location.country) == undefined
          ? setCountry('DZ')
          : setCountry(res?.data?.location.country)
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [country]);

  if (isFetching && loading)
    return <Loader title="Loading Songs around you..." />;

  if (error && country !== '') return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Around you <span className="font-black">{country}</span>
      </h2>

      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default CountryTracks;

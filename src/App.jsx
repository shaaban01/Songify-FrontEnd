import { useSelector } from 'react-redux';
import {
  Route,
  Routes,
  Navigate,
  matchRoutes,
  useLocation,
} from 'react-router-dom';

import { Searchbar, Sidebar, MusicPlayer, TopPlay } from './components';
import {
  ArtistDetails,
  TopArtists,
  AroundYou,
  Discover,
  Search,
  SongDetails,
  TopCharts,
  Login,
  Signup,
  Playlists,
} from './pages';
const App = () => {
  const location = useLocation();
  console.log(location.pathname);

  const isAuthenticated =
    localStorage.getItem('token') !== null &&
    localStorage.getItem('token') !== undefined;
  const { activeSong } = useSelector((state) => state.player);

  const PrivateRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/login" />;
  };
  return (
    <div className="relative flex ">
      {isAuthenticated && location.pathname !== '/login' && <Sidebar />}
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#561E7C] h-screen	">
        {isAuthenticated && location.pathname !== '/login' && <Searchbar />}

        <div
          className={
            location.pathname === '/register' || location.pathname === '/login'
              ? ''
              : 'px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse'
          }
        >
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
              <Route
                index
                path="/discover"
                element={
                  <PrivateRoute>
                    <Discover />
                  </PrivateRoute>
                }
              />
              <Route
                path="/top-artists"
                element={
                  <PrivateRoute>
                    <TopArtists />
                  </PrivateRoute>
                }
              />
              <Route
                path="/top-charts"
                element={
                  <PrivateRoute>
                    <TopCharts />
                  </PrivateRoute>
                }
              />
              <Route
                path="/around-you"
                element={
                  <PrivateRoute>
                    <AroundYou />
                  </PrivateRoute>
                }
              />
              <Route
                path="/artists/:id"
                element={
                  <PrivateRoute>
                    <ArtistDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="/songs/:songid"
                element={
                  <PrivateRoute>
                    <SongDetails />
                  </PrivateRoute>
                }
              />
              <Route
                path="/search/:searchTerm"
                element={
                  <PrivateRoute>
                    <Search />
                  </PrivateRoute>
                }
              />
              <Route
                path="/playlists"
                element={
                  <PrivateRoute>
                    <Playlists />
                  </PrivateRoute>
                }
              />
            </Routes>
          </div>
          {isAuthenticated && location.pathname !== '/login' && (
            <div className="xl:sticky relative top-0 h-fit">
              <TopPlay />
            </div>
          )}
        </div>
      </div>

      {activeSong?.title &&
        isAuthenticated &&
        location.pathname !== '/login' && (
          <div className="absolute h-28 bottom-0 left-0 right-0 flex animate-slideup bg-gradient-to-br from-white/10 to-[#2a2a80] backdrop-blur-lg rounded-t-3xl z-10">
            <MusicPlayer />
          </div>
        )}
    </div>
  );
};

export default App;

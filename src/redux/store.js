import { configureStore } from "@reduxjs/toolkit";

import { shazamCoreApi } from "./services/shazamCore";
import playerReducer from "./features/playerSlice";
import userReducer from "./features/UserSlice";

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
    user: userReducer,
  },
  middlewar: (getDefaultMiddleware) =>
    getDefaultMiddleware().concate(shazamCoreApi.middleware),
});

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userId: 0,
  isAuthenticated: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.userId = action.payload.userId;
      state.isAuthenticated = action.payload.isAuthenticated;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User, fetchDataUser } from "../../../interfaces";

const initialState: fetchDataUser<User> = {
  data: { user: null, isAuthenticated: false },
};

export const getAuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getAuthData: (state, action: PayloadAction<User>) => {
      state.data = action.payload;
    },
  },
});

export const { getAuthData } = getAuthSlice.actions;

export default getAuthSlice.reducer;

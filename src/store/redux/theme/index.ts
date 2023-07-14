import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getTheme: (state) => {
      return state;
    },
    changeTheme: (state) => {
      return (state = !state);
    },
  },
});

export default themeSlice.reducer;

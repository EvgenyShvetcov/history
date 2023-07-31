import { createSlice } from "@reduxjs/toolkit";

const initialState = false;

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state) => {
      return (state = !state);
    },
  },
});

export default themeSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";

export enum Color {
  DARK = "Dark",
  LIGHT = "Light",
}

export interface ThemeColor {
  color: Color;
}

const initialState: ThemeColor = {
  color: Color.LIGHT,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    getTheme: (state) => state,
    changeTheme: (state) => {
      if (state.color === Color.LIGHT) {
        state.color = Color.DARK;
      } else if (state.color === Color.DARK) {
        state.color = Color.LIGHT;
      }
      return state;
    },
  },
});

export default themeSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./theme";
import chaptersSlice from "./chapters";

export const rootReducer = combineReducers({
  theme: themeSlice,
  chapters: chaptersSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

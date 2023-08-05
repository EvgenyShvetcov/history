import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./theme";
import chaptersSlice from "./chapters";
import postsSlice from "./posts";

export const rootReducer = combineReducers({
  theme: themeSlice,
  chapters: chaptersSlice,
  posts: postsSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

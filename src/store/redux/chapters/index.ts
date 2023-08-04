import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../../interfaces";
// import { ChapterState } from "../../../interfaces";

const initialState: fetchData = { data: [], isLoading: false };

export const chaptersSlice = createSlice({
  name: "chapters",
  initialState: initialState,
  reducers: {
    getAllChaptersFetch: (state) => {
      state.isLoading = true;
    },
    getAllChapters: (state, action) => {
      state.data = action.payload;
      state.isLoading = false;
    },
    getAllChaptersFailure: (state) => {
      state.isLoading = false;
    },
  },
});

export const { getAllChaptersFetch, getAllChapters, getAllChaptersFailure } =
  chaptersSlice.actions;

export default chaptersSlice.reducer;

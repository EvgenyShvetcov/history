import { createSlice } from "@reduxjs/toolkit";
import { LoadingState, fetchData } from "../../../interfaces";
import { ChapterState } from "../../../interfaces";

const initialState: fetchData<ChapterState> = {
  data: [],
  isLoading: LoadingState.loading,
};

export const chaptersSlice = createSlice({
  name: "chapters",
  initialState,
  reducers: {
    getAllChaptersFetch: (state) => {
      state.isLoading = LoadingState.loading;
    },
    getAllChapters: (state, action) => {
      state.data = action.payload;
      state.isLoading = LoadingState.success;
    },
    getAllChaptersFailure: (state) => {
      state.isLoading = LoadingState.failed;
    },
  },
});

export const { getAllChaptersFetch, getAllChapters, getAllChaptersFailure } =
  chaptersSlice.actions;

export default chaptersSlice.reducer;

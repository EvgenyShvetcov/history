import { createSlice } from "@reduxjs/toolkit";
import { LoadingState, PostState, fetchData } from "../../../interfaces";

const initialState: fetchData<PostState> = {
  data: [],
  isLoading: LoadingState.loading,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getAllPostsFetch: (state, action) => {
      // console.log(action);

      state.isLoading = LoadingState.loading;
    },
    getAllPosts: (state, action) => {
      state.data = action.payload;
      state.isLoading = LoadingState.success;
    },
    getAllPostsFailure: (state) => {
      state.isLoading = LoadingState.failed;
    },
  },
});

export const { getAllPostsFailure, getAllPosts, getAllPostsFetch } =
  postsSlice.actions;

export default postsSlice.reducer;

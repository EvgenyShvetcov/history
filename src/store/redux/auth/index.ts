import { createSlice } from "@reduxjs/toolkit";
import { LoadingState, UserState, fetchDataUser } from "../../../interfaces";

const initialState: fetchDataUser<UserState | null> = {
  data: null,
  isLoading: LoadingState.loading,
};

export const registerSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    registerFetch: (state, action) => {
      // console.log(action);
      state.data = action.payload;
      state.isLoading = LoadingState.loading;
    },
    register: (state, action) => {
      state.data = action.payload;
      state.isLoading = LoadingState.success;
    },
    registerFailure: (state) => {
      state.isLoading = LoadingState.failed;
    },
  },
});

export const { registerFetch, register, registerFailure } =
  registerSlice.actions;

export default registerSlice.reducer;

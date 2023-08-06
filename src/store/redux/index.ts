import { combineReducers } from "@reduxjs/toolkit";

import authSlice from "./auth";
import { allApi } from "../services/Services";

export const rootReducer = combineReducers({
  auth: authSlice,
  [allApi.reducerPath]: allApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./redux";
import { allApi } from "./services/Services";

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware().concat(allApi.middleware)],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

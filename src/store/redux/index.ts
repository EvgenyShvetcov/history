import { combineReducers } from "@reduxjs/toolkit";
import themeSlice from "./theme";

// import onboardingSlice from './onboarding';

export const rootReducer = combineReducers({
  theme: themeSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

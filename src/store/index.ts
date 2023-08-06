import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./redux";
import createSagaMiddleWare from "redux-saga";
import rootSaga from "./sagas";
import { allApi } from "./services/Services";

// const sagaMiddleware = createSagaMiddleWare();

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware().concat(allApi.middleware)],
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// sagaMiddleware.run(rootSaga);

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => {
//     getDefaultMiddleware().concat(chapterApi.middleware);
//   },
// });

// export type AppDispatch = typeof store.dispatch;
// export type RootState = ReturnType<typeof store.getState>;
// setupListeners(store.dispatch);

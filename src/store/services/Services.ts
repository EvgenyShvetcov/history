import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  ChapterState,
  PostState,
  RegistrationState,
  UserLogin,
  UserState,
} from "../../interfaces";

export const allApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
    prepareHeaders: (headers) => {
      const token = window.localStorage.getItem("token");

      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
    },
  }),

  tagTypes: ["auth"],
  endpoints: (build) => ({
    //Эндпоинты с аунтификацией и юзером
    fetchLogin: build.mutation<UserState, UserLogin>({
      query: (state) => ({
        url: "/login",
        method: "POST",
        body: state,
      }),
      invalidatesTags: ["auth"],
    }),
    fetchRegister: build.mutation<UserState, RegistrationState>({
      query: (state) => ({
        url: "/register",
        method: "POST",
        body: state,
      }),
      invalidatesTags: ["auth"],
    }),
    fetchUser: build.query<UserState, string>({
      query: () => ({
        url: "/auth/me",
        method: "GET",
      }),
      // providesTags: ["auth"],
    }),
    //Разделы с главами
    fetchAllChapters: build.query<ChapterState[], string>({
      query: () => ({
        url: "/subjects",
        method: "GET",
        params: { _limit: 5 },
      }),
    }),
    //Разделы с постами
    fetchOnePost: build.query<PostState, string>({
      query: (id: string) => ({
        url: `/post/${id}`,
        method: "GET",
      }),
    }),
    fetchAllPosts: build.query<PostState[], string>({
      query: (topicId: string) => ({
        url: `/posts/${topicId}`,
        method: "GET",
      }),
    }),
    fetchDeletePost: build.query<PostState[], string>({
      query: (topicId: string) => ({
        url: `/post/${topicId}`,
        method: "DELETE",
      }),
    }),
    fetchUpdatePost: build.query<
      PostState[],
      { state: PostState; topicId: number }
    >({
      query: ({ state, topicId }) => ({
        url: `/posts/${topicId}`,
        method: "PATCH",
        params: state,
      }),
    }),
    fetchCreatePost: build.query<PostState[], PostState>({
      query: (state) => ({
        url: `/posts`,
        method: "POST",
        params: state,
      }),
    }),
  }),
});

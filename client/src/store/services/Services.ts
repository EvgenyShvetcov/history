import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import {
  ChapterState,
  Comment,
  PostComment,
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

  tagTypes: ["auth", "posts", "chapters"],
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
      providesTags: ["auth"],
    }),
    fetchAllUsers: build.query<UserState[], string>({
      query: () => ({
        url: "/users",
        method: "GET",
      }),
      providesTags: ["auth"],
    }),
    //Разделы с главами
    fetchAllChapters: build.query<ChapterState[], string>({
      query: () => ({
        url: "/subjects",
        method: "GET",
      }),
      providesTags: ["chapters"],
    }),
    postChapter: build.mutation<ChapterState, Partial<ChapterState>>({
      query: (state) => ({
        url: "/subjects",
        method: "POST",
        body: state,
      }),
      invalidatesTags: ["chapters"],
    }),
    //Разделы с постами
    fetchOnePost: build.query<PostState, string>({
      query: (id: string) => ({
        url: `/post/${id}`,
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
    fetchAllPosts: build.query<PostState[], string>({
      query: (topicId: string) => ({
        url: `/posts/${topicId}`,
        method: "GET",
      }),
      providesTags: ["posts"],
    }),
    fetchDeletePost: build.mutation<PostState[], string>({
      query: (topicId: string) => ({
        url: `/post/${topicId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["posts"],
    }),
    fetchUpdatePost: build.mutation<
      PostState,
      { state: Partial<PostState>; topicId: string }
    >({
      query: ({ state, topicId }) => ({
        url: `/post/${topicId}`,
        method: "PATCH",
        body: state,
      }),
      invalidatesTags: ["posts"],
    }),
    fetchCreatePost: build.mutation<PostState, Partial<PostState>>({
      query: (state) => ({
        url: `/posts`,
        method: "POST",
        body: state,
      }),
      invalidatesTags: ["posts"],
    }),
    fetchCreateComment: build.mutation<Comment, Partial<PostComment>>({
      query: (state) => ({
        url: `/comment`,
        method: "POST",
        body: state,
      }),
      invalidatesTags: ["posts"],
    }),
    uploadFile: build.mutation({
      query: (file) => {
        const body = new FormData();
        body.append("Content-Type", file.type);
        body.append("image", file);

        return {
          url: `/upload`,
          method: "POST",
          body,
        };
      },
      invalidatesTags: ["posts"],
    }),
  }),
});

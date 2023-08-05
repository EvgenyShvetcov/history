import axios from "axios";
import {
  ChapterState,
  LoadingState,
  PostState,
  UserState,
  fetchData,
  fetchDataUser,
} from "../interfaces";
// import { ApplicationState, IncomingJson } from "./interfaces";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getChapters(): Promise<fetchData<ChapterState | null>> {
  try {
    const responce = await instance.get(`/subjects`).then((resp) => {
      return resp;
    });
    return responce.data;
  } catch (e) {
    console.log(e);
    return { data: [], isLoading: LoadingState.failed };
  }
}

export async function getPosts(
  topicId: string
): Promise<fetchData<PostState | null>> {
  try {
    const responce = await instance.get(`/posts/${topicId}`).then((resp) => {
      return resp;
    });
    return responce.data;
  } catch (e) {
    console.log(e);
    return { data: [], isLoading: LoadingState.failed };
  }
}

export async function registration(
  params: UserState
): Promise<fetchDataUser<UserState | null>> {
  try {
    const responce = await instance.get(`/posts/`).then((resp) => {
      return resp;
    });
    return responce.data;
  } catch (e) {
    console.log(e);
    return { data: null, isLoading: LoadingState.failed };
  }
}

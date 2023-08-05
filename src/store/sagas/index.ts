import { call, put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/types";
import { chaptersSlice } from "../redux/chapters";
import { getChapters, getPosts, registration } from "../../api/api";
import {
  ChapterState,
  PostState,
  UserState,
  fetchData,
  fetchDataUser,
} from "../../interfaces";
import { postsSlice } from "../redux/posts";
import { registerSlice } from "../redux/auth";

function* workerGetChaptersList() {
  try {
    const result: fetchData<ChapterState> = yield call(() => getChapters());
    yield put(chaptersSlice.actions.getAllChapters(result));
  } catch (e) {
    console.log(e);
  }
}

function* workerGetPostsList(params: any) {
  try {
    const result: fetchData<PostState> = yield call(() =>
      getPosts(params.payload)
    );
    yield put(postsSlice.actions.getAllPosts(result));
  } catch (e) {
    console.log(e);
  }
}

function* workerAuth(params: any) {
  try {
    const result: fetchDataUser<UserState> = yield call(() =>
      registration(params.payload)
    );
    console.log(result);

    yield put(registerSlice.actions.register(result));
  } catch (e) {
    console.log(e);
  }
}

export default function* (): SagaIterator {
  yield takeEvery("chapters/getAllChaptersFetch", workerGetChaptersList);
  yield takeEvery("posts/getAllPostsFetch", workerGetPostsList);
  yield takeEvery("user/register", workerAuth);
}

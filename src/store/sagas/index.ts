import { call, put, takeEvery } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/types";
import { chaptersSlice } from "../redux/chapters";
import { getChapters } from "../../api/api";
import { fetchData } from "../../interfaces";

function* workerGetChaptersList() {
  try {
    const result: fetchData = yield call(() => getChapters());
    yield put(chaptersSlice.actions.getAllChapters(result));
  } catch (e) {
    console.log(e);
  }
}

export default function* (): SagaIterator {
  yield takeEvery("chapters/getAllChaptersFetch", workerGetChaptersList);
}

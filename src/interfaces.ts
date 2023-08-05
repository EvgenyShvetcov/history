export enum LoadingState {
  loading = "loading",
  failed = "failed",
  success = "success",
}

export interface ChapterState {
  _id: string;
  country: string;
  discription: string;
  pictureUrl?: string;
}

export interface UserState {
  _id: string;
  fullName: string;
  email: string;
  passwordHash?: string;
  avatarUrl?: string;
}

export interface PostState {
  _id: string;
  title: string;
  text: string;
  topic: string;
  viewsCount: Number;
  user: UserState;
  imageUrl: string;
}

export interface fetchData<Item> {
  data: Item[];
  isLoading: LoadingState;
}

export interface fetchDataUser<Item> {
  data: Item;
  isLoading: LoadingState;
}

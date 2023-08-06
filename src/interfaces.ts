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
  token?: string;
  createdAt: string;
  updatedAt: string;
  passwordHash?: string;
  avatarUrl?: string;
}

export interface User {
  user: UserState | null;
  isAuthenticated: boolean;
}

export interface UserLogin {
  email: string;
  password: string;
}

export interface RegistrationState extends UserLogin {
  fullName: string;
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
}

export interface fetchDataUser<Item> {
  data: Item;
}

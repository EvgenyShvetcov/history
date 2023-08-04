export interface ChapterState {
  _id: string;
  country: string;
  discription: string;
  pictureUrl?: string;
}

export interface fetchData {
  data: ChapterState[];
  isLoading: boolean;
}

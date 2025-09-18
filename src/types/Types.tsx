export interface ReadingInitialState {
  readings: ReadingType[];
}
export interface ReadingType {
  id: string;
  title: string;
  author?: string;
  category?: string;
  date: string;
}

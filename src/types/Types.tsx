export interface ReadingInitialState {
  readings: ReadingType[];
}
export interface ReadingType {
  id: number;
  title: string;
  author?: string;
  category?: string;
  date: string;
}

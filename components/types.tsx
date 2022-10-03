export interface IReduxData {
  images: {
    background?: string;
    coverart?: string;
  };
  title: string;
  artists: [{}];
  share?: { subject?: string };
}

import { configureStore } from "@reduxjs/toolkit";
import MusicSlice from "./features/musicSlice";
const store = configureStore({
  reducer: {
    musicData: MusicSlice,
  },
});

export default store;

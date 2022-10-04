import { combineReducers, configureStore } from "@reduxjs/toolkit";

import MusicSlice from "./features/musicSlice";
import SongDetailsSlice from "./features/songDetailsSlice";

// const comRed = combineReducers({
//   musicData: MusicSlice,
// });
const store = configureStore({
  reducer: {
    songDetails: SongDetailsSlice,
    musicData: MusicSlice,
  },
});

export default store;

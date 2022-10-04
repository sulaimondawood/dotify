import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSongDetails = createAsyncThunk(
  "song/details",
  async (key: any, thunckAPI) => {
    try {
      const options = {
        method: "GET",
        url: "https://shazam-core.p.rapidapi.com/v1/tracks/details",
        params: { track_id: "498502624" },
        headers: {
          "X-RapidAPI-Key":
            "cff05d5567msh00c9f291616096ep10c6b0jsn8b1c093fa5eb",
          "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
        },
      };
      const res = await axios.request(options);
      //   console.log(res.data);

      return res.data;
    } catch (error) {
      console.error(error);
    }
  }
);

const initialState: { isLoading: boolean; data: any[] } = {
  isLoading: true,
  data: [],
};
const songDetailSlice = createSlice({
  name: "songDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSongDetails.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSongDetails.fulfilled, (state, { payload }: any) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getSongDetails.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export default songDetailSlice.reducer;

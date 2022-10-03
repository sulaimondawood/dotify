import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
export const getData = createAsyncThunk("music/getData", async () => {
  try {
    // const options = {
    //   method: "GET",
    //   headers: {
    //     "X-RapidAPI-Key": "cff05d5567msh00c9f291616096ep10c6b0jsn8b1c093fa5eb",
    //     "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
    //   },
    //   // headers: {
    //   //   "X-RapidAPI-Key": process.env.NEXT_APP_API_KEY,
    //   //   "X-RapidAPI-Host": process.env.NEXT_APP_API_KEY,
    //   // },
    // };

    // const res = await fetch(
    //   "https://shazam-core.p.rapidapi.com/v1/charts/world",

    //   options
    // );
    // const data = res.json();
    // console.log(data);

    const options = {
      method: "GET",
      url: "https://shazam-core.p.rapidapi.com/v1/charts/world",
      headers: {
        "X-RapidAPI-Key": "cff05d5567msh00c9f291616096ep10c6b0jsn8b1c093fa5eb",
        "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
      },
    };

    const res = await axios.request(options);
    const data = res.data;
    console.log(data);

    return data;
  } catch (error) {
    console.error(error);
  }
});

interface IS {
  isLoading: boolean;
  data: [];
}
const initialState: IS = {
  isLoading: true,
  data: [],
};
const musicSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action: any) => {
      console.log(action);
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getData.rejected, (state) => {
      state.isLoading = false;
    });
  },
});
export default musicSlice.reducer;
// console.log(musicSlice);

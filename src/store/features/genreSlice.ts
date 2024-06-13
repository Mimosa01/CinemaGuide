import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface GenreState {
  genre: string;
}

const initialState: GenreState = {
  genre: ''
};

export const GenreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    getGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    }
  }
});

export default GenreSlice.reducer;
export const { getGenre } = GenreSlice.actions;
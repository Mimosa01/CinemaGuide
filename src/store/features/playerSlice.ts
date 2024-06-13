import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PLayerState {
  open: boolean;
  id: string;
}

const initialState: PLayerState = {
  open: false,
  id: ''
}

export const PlayerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    openPlayer: (state, action: PayloadAction<string>) => {
      state.open = true;
      state.id = action.payload;
      document.body.classList.add('no-scroll');
    },
    closePlayer: state => {
      state.open = false;
      document.body.classList.remove('no-scroll');
    }
  }
})

export default PlayerSlice.reducer;
export const { openPlayer, closePlayer } = PlayerSlice.actions;
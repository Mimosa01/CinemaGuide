import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ModalSlice } from "./features/modalSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { GenreSlice } from "./features/genreSlice";
import { PlayerSlice } from "./features/playerSlice";

const rootReduser = combineReducers({
  modal: ModalSlice.reducer, 
  genre: GenreSlice.reducer,
  player: PlayerSlice.reducer

});

export const store = configureStore({
  reducer: rootReduser
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;
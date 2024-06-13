import { createSlice } from "@reduxjs/toolkit";
import { Appointment } from "../../types/ModalWindowProps";

interface ModalWindowState {
  open: boolean;
  appointment: Appointment;
}

const initialState: ModalWindowState = {
  open: false,
  appointment: {entry: true}
}

const openModal = (state: ModalWindowState, appointment: Appointment) => {
  if (!state.open) {
    state.open = true;
    state.appointment = appointment;
    document.body.classList.add('no-scroll');
  }
  state.appointment = {};
  state.appointment = appointment;
}

export const ModalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openEntryModal: state => {
      openModal(state, {entry: true})
    },
    openRegisterModal: state => {
      openModal(state, {register: true})
    },
    openMessageModal: state => {
      openModal(state, {message: true})
    },
    closeModal: state => {
      state.open = false;
      state.appointment = {};
      document.body.classList.remove('no-scroll');
    }
  }
})

export default ModalSlice.reducer;
export const { openEntryModal, openRegisterModal, openMessageModal, closeModal } = ModalSlice.actions;
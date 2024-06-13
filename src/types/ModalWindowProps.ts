export interface Appointment {
  entry?: boolean;
  register?: boolean;
  message?: boolean;
}

export interface PropsModalWindow {
  appointment?: Appointment;
}
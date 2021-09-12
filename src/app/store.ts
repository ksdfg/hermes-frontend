import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import qrReducer from "../pages/Qr/QrSlice";
import formReducer from "../pages/Form/FormSlice";

export const store = configureStore({
  reducer: {
    qr: qrReducer,
    form: formReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit";
import { checkLoggedInAPI, newSessionAPI } from "./QrAPI";

export interface QrState {
  code: string | null;
  loggedIn: boolean;
  error: SerializedError | null;
  status: "idle" | "loading" | "failed";
}

const initialState: QrState = {
  code: null,
  loggedIn: false,
  error: null,
  status: "idle",
};

export const newSession = createAsyncThunk("qr/new", async () => {
  return await newSessionAPI();
});

export const checkLoggedIn = createAsyncThunk("qr/loggedIn", async () => {
  return await checkLoggedInAPI();
});

export const QrSlice = createSlice({
  name: "qr",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(newSession.pending, (state) => {
        state.loggedIn = false;
        state.code = null;
        state.error = null;
        state.status = "loading";

        localStorage.clear();
      })
      .addCase(newSession.fulfilled, (state, action) => {
        state.code = action.payload.qr;
        state.status = "idle";

        localStorage.setItem("session", action.payload.session);
      })
      .addCase(newSession.rejected, (state, action) => {
        state.error = action.error;
        state.status = "failed";

        localStorage.clear();
      });

    builder
      .addCase(checkLoggedIn.pending, (state) => {
        state.loggedIn = false;
        state.error = null;
        state.status = "idle";
      })
      .addCase(checkLoggedIn.fulfilled, (state, action) => {
        state.loggedIn = action.payload.loggedIn;
      })
      .addCase(checkLoggedIn.rejected, (state, action) => {
        state.error = action.error;
        state.status = "failed";
      });
  },
});

export default QrSlice.reducer;

import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit";
import { logsAPI } from "./LogAPI";

export interface LogsResponse {
  processing: boolean;
  success: string[];
  failure: string[];
}

export interface LogState extends LogsResponse {
  error: SerializedError | null;
}

const initialState: LogState = {
  processing: true,
  success: [],
  failure: [],
  error: null,
};

export const fetchLogs = createAsyncThunk("logs/fetch", async () => {
  return await logsAPI();
});

export const LogSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLogs.pending, (state) => {
        state.error = null;
      })
      .addCase(fetchLogs.fulfilled, (state, action) => {
        state.processing = action.payload.processing;
        if (action.payload.success) state.success = action.payload.success;
        if (action.payload.failure) state.failure = action.payload.failure;
      })
      .addCase(fetchLogs.rejected, (state, action) => {
        state.error = action.error;
      });
  },
});

export default LogSlice.reducer;

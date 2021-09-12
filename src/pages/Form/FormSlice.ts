import { createAsyncThunk, createSlice, SerializedError } from "@reduxjs/toolkit";
import { formSubmit } from "./FormAPI";

export interface FormRequest {
  file: File;
  body: string;
}

export interface FormState {
  error: SerializedError | null;
  status: "idle" | "loading" | "success" | "failed";
}

const initialState: FormState = {
  error: null,
  status: "idle",
};

export const submitForm = createAsyncThunk("form/submit", async (form: FormRequest) => {
  return await formSubmit(form);
});

export const FormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(submitForm.pending, (state) => {
        state.error = null;
        state.status = "loading";
      })
      .addCase(submitForm.fulfilled, (state) => {
        state.status = "success";
      })
      .addCase(submitForm.rejected, (state, action) => {
        state.error = action.error;
        state.status = "failed";
      });
  },
});

export default FormSlice.reducer;

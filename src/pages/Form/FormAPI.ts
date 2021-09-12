import { FormRequest } from "./FormSlice";
import { instance } from "../../app/client";

export const formSubmit = async (formData: FormRequest) => {
  try {
    const form = new FormData();
    form.append("file", formData.file);
    form.append("body", formData.body);
    return await instance.post("/send", form);
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

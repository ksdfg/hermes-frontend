import { instance } from "../../app/client";
import { checkLoggedInResponse } from "./QrSlice";

export const newSessionAPI = async (): Promise<string> => {
  try {
    const raw = await instance.post("/");
    return raw.data;
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

export const checkLoggedInAPI = async (): Promise<checkLoggedInResponse> => {
  try {
    const raw = await instance.get("/loggedIn");
    return raw.data;
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

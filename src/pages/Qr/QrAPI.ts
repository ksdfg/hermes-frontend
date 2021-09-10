import { instance } from "../../app/client";
import { checkLoggedInResponse } from "./QrSlice";

export const newSessionAPI = async (): Promise<string> => {
  try {
    const raw = await instance.post("/");
    return raw.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const checkLoggedInAPI = async (): Promise<checkLoggedInResponse> => {
  try {
    const raw = await instance.get("/loggedIn");
    return raw.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

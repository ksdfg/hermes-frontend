import { instance } from "../../app/client";
import { LogsResponse } from "./LogSlice";

export const logsAPI = async (): Promise<LogsResponse> => {
  try {
    const raw = await instance.get("/logs");
    return raw.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteSessionAPI = async () => {
  try {
    return await instance.delete("/");
  } catch (error) {
    return Promise.reject(error);
  }
};

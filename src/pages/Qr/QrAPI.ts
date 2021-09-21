import { instance } from "../../app/client";

interface newSessionResponse {
  qr: string;
  session: string;
}

export const newSessionAPI = async (): Promise<newSessionResponse> => {
  try {
    const raw = await instance.post("/");
    return {
      qr: raw.data,
      session: raw.headers.session,
    };
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

interface checkLoggedInResponse {
  loggedIn: boolean;
}

export const checkLoggedInAPI = async (): Promise<checkLoggedInResponse> => {
  try {
    const raw = await instance.get("/loggedIn");
    return raw.data;
  } catch (error: any) {
    return Promise.reject(error.response.data);
  }
};

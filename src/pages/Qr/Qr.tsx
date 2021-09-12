import { useAppDispatch, useAppSelector, useInterval } from "../../app/hooks";
import { useHistory } from "react-router-dom";
import { checkLoggedIn, newSession } from "./QrSlice";
import { useEffect, useState } from "react";
import { Loader } from "../../components/Loader";

export function Qr() {
  const qr = useAppSelector((state) => state.qr.code);
  const loggedIn = useAppSelector((state) => state.qr.loggedIn);
  const status = useAppSelector((state) => state.qr.status);
  const error = useAppSelector((state) => state.qr.error);
  const dispatch = useAppDispatch();
  const history = useHistory();

  const [retries, setRetries] = useState<number>(0);

  useEffect(() => {
    dispatch(newSession());
  }, [dispatch]);

  useInterval(() => {
    if (qr) {
      if (!loggedIn) {
        if (retries < 20) {
          dispatch(checkLoggedIn());
          setRetries(retries + 1);
        } else {
          setRetries(0);
          dispatch(newSession());
        }
      } else {
        history.push("/form");
      }
    }
  }, 1000);

  useEffect(() => {
    if (error) {
      alert(error.message);
    }
  }, [error]);

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full h-full">
      <img src={qr ?? ""} alt="QR code loading" />
      <p className="text-4xl text-red-400">Scan the QR code with your WhatsApp</p>
      <p className="text-2xl">QR code will change in {20 - retries} seconds</p>
    </div>
  );
}

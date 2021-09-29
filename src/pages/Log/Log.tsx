import { useAppDispatch, useAppSelector, useInterval } from "../../app/hooks";
import { useEffect, useState } from "react";
import { deleteSession, fetchLogs } from "./LogSlice";

export function Logs() {
  const success = useAppSelector((state) => state.logs.success);
  const failure = useAppSelector((state) => state.logs.failure);
  const processing = useAppSelector((state) => state.logs.processing);
  const error = useAppSelector((state) => state.logs.error);
  const dispatch = useAppDispatch();

  const [del, setDel] = useState<boolean>(false);

  useInterval(() => {
    if (processing) {
      dispatch(fetchLogs());
    }
  }, 1000);

  useEffect(() => {
    if (!processing && !del) {
      setDel(true);
      dispatch(deleteSession());
    }
  }, [processing, del, dispatch]);

  useEffect(() => {
    if (error) {
      console.log(error);
      alert(error.message);
    }
  }, [error]);

  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full h-full p-8">
      <h1 className="text-4xl">Check logs while the messages are being sent to all recipients</h1>
      <div className="flex flex-row gap-16 w-full h-full text-xl">
        <div className="flex flex-col gap-4 w-full h-full border-4 border-green-400 p-8 overflow-y-auto">
          {success.map((log, i) => (
            <p key={i}>→ {log}</p>
          ))}
        </div>
        <div className="flex flex-col gap-4 w-full h-full border-4 border-red-400 p-8 overflow-y-auto">
          {failure.map((log, i) => (
            <p key={i}>→ {log}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

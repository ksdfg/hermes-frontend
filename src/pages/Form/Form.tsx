import { Link, useHistory } from "react-router-dom";
import { FormEvent, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { submitForm } from "./FormSlice";
import { Loader } from "../../components/Loader";

export function Form() {
  const status = useAppSelector((state) => state.form.status);
  const error = useAppSelector((state) => state.form.error);
  const history = useHistory();
  const dispatch = useAppDispatch();

  const [file, setFile] = useState<File | null>(null);
  const [body, setBody] = useState<string>("");

  useEffect(() => {
    if (status === "success") {
      history.push("/");
    } else if (status === "failed" && error) {
      alert(error.message);
    }
  }, [history, status, error]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (file && body) {
      dispatch(submitForm({ file, body }));
    }
  };

  if (status === "loading") {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <Loader />
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-16 items-center justify-center w-full h-full px-8 py-8"
      onSubmit={(event) => handleSubmit(event)}
    >
      <img src={"/miscellaneous/logo-favicon.png"} alt="" />

      <div className="flex flex-col gap-8 items-center justify-center w-full max-w-5xl">
        <label
          htmlFor="file"
          className="flex flex-col items-center justify-center w-full p-8 border-4 border-red-400 border-dashed group cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-8 text-gray-400 group-hover:text-red-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-red-400">
            {file ? file.name : "Upload CSV file"}
          </p>
          <input
            className="w-0 h-0"
            id="file"
            name="file"
            type="file"
            accept="text/csv"
            onChange={(event) => {
              if (event.target.files) setFile(event.target.files[0]);
            }}
            required
          />
        </label>

        <textarea
          className="p-4 w-full rounded text-md text-black"
          id="body"
          name="body"
          placeholder="Enter message body (with placeholders)"
          rows={5}
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
      </div>

      <div className="flex flex-row gap-16 items-center justify-center">
        <Link to="/qr">
          <button className="bg-blue-600 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 w-60 rounded">
            Back
          </button>
        </Link>
        <input
          className="bg-blue-600 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 w-60 rounded cursor-pointer"
          type="submit"
          value="Submit"
        />
      </div>
    </form>
  );
}

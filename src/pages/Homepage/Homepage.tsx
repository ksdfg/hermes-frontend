export function Homepage() {
  return (
    <div className="flex flex-col gap-16 items-center justify-center w-full h-full">
      <img src="/miscellaneous/logo.png" alt="Hermes" />

      <div className="flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl">A web application for WhatsApp messaging automation</h1>
        <h1 className="text-2xl">Use from Desktop/laptop is suggested</h1>
      </div>

      <div className="flex flex-row gap-16 items-center justify-center">
        <a href="/">
          <button className="bg-blue-600 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 w-60 rounded">
            How to use
          </button>
        </a>
        <a href="/">
          <button className="bg-blue-600 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 w-60 rounded">
            Start
          </button>
        </a>
      </div>
    </div>
  );
}

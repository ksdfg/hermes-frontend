import { Link } from "react-router-dom";

export function Help() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center w-full min-h-full px-8 py-8 overflow-y-auto">
      <ul className="list-disc list-outside flex flex-col gap-8 items-start justify-center text-lg max-w-5xl">
        <li>
          Click on the <em>Start</em> button.
        </li>

        <li>Scan the QR code with whatsapp (link device) to login.</li>

        <li>
          Fill the form according to the guidelines mentioned below.
          <ul className="list-disc list-outside flex flex-col gap-8 items-start justify-center max-w-5xl pt-8 pl-8">
            <li>
              Upload a <em>CSV</em> file with the first row being all the names of the columns, and rest of the rows
              being values.
            </li>

            <li>
              One of the columns must be <code>phone</code>, which will have the phone numbers to which the message
              needs to be sent. The number must include the country code without the +; for example, if your number is{" "}
              <code>987654321</code>, and you&#39;re from India (<code>+91</code>), then enter <code>91987654321</code>.
              It&#39;s not necessary for the numbers to be in your contacts list or for you to have an existing chat
              with them.
            </li>

            <li>
              Enter the message body you want to send. You can use <code>{"{{column_name}}"}</code> as a placeholder in
              the message body, which will be replaced by the respective value of the column for that row.
            </li>
          </ul>
        </li>

        <li>
          Click on the <em>Send</em> button to submit the form.
        </li>

        <li>Monitor logs as messages are sent from your whatsapp account.</li>

        <li>...</li>

        <li>Profit!</li>
      </ul>

      <div className="flex flex-row gap-16 items-center justify-center">
        <Link to="/">
          <button className="bg-blue-600 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 w-60 rounded">
            Back
          </button>
        </Link>
        <Link to="/qr">
          <button className="bg-blue-600 hover:bg-blue-400 text-white text-2xl font-bold py-2 px-4 w-60 rounded">
            Start
          </button>
        </Link>
      </div>
    </div>
  );
}

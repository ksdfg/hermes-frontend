![Hermes](public/miscellaneous/logo.png)

Web application for WhatsApp messaging automation.

Hermes allows a user to automate sending a message to multiple people (whether they are or aren't in your contacts list)
from a CSV file with your number. You can also use placeholders in the message body that will be replaced with values
from the CSV file.

This application is meant primarily for event management - to contact people who have signed up for events for relaying
information and reminders. I cannot condone any usage of this application outside this usecase.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to use

- Click on the *Start* button.
- Scan the QR code with whatsapp (link device) to login.
- Fill the form according to the guidelines mentioned below.
    - Upload a *CSV* file with the first row being all the names of the columns, and rest of the rows being values.
    - One of the columns must be `phone`, which will have the phone numbers to which the message needs to be sent. The
      number must include the country code without the +; for example, if your number is `987654321`, and you're from
      India (`+91`), then enter `91987654321`. It's not necessary for the numbers to be in your contacts list or for you
      to have an existing chat with them.
    - Enter the message body you want to send. You can use `{{column_name}}` as a placeholder in the message body, which
      will be replaced by the respective value of the column for that row.
- Click on the *Send* button to submit the form.
- Monitor logs as messages are sent from your whatsapp account.
- ...
- Profit!

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

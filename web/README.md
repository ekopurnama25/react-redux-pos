# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### POST USERS OR ADD USERS

### [POST]http://localhost:5000/api/create/

### REQUEST

{
"username": "ek01@121",
"email": "pill12112@gmail.com",
"password": "123",
"roles": "Users",
"status": "Enebled"
}

### RESPONE

{
"users": {
"username": "ek01@121",
"email": "pill12112@gmail.com",
"password": "$argon2i$v=19$m=4096,t=3,p=1$unzt47LGfJRsFCsLIvXyDA$KK9CrXZBzIDopdr9jsDnySQgsBT79ph7N0TMUHG1CXg",
"id_users": "fa97a053-41c2-4997-bed5-d6dd8db318c3",
"create_users": "2022-02-27T05:44:08.939Z",
"update_users": "2022-02-27T05:44:08.939Z"
}
}

### GET USERS

### [GET]http://localhost:5000/api/users/

### RESPONSE

{
"status": true,
"message": "success",
"data": {
"data": [
{
"id_users": "a9aeedb0-1825-4760-a691-81bc61cbe9f9",
"username": "eko1",
"email": "eko1@gmail.com",
"password": "$argon2i$v=19$m=4096,t=3,p=1$SPsRIRp15erGdA7v5Prw7A$o/AAQSeyoop1XDKnqMEq6L9GuGWHttkWNTA2rO0Otnc",
"create_users": "2022-02-06T05:54:06.019Z",
"update_users": "2022-02-06T05:54:06.019Z",
"roles": [
{
"id_roles": "a484d331-e674-4952-b02b-8a7e173e794a",
"id_users": "a9aeedb0-1825-4760-a691-81bc61cbe9f9",
"roles": "Users",
"status": "Eneble",
"create_roles": "2022-02-06T05:54:06.028Z",
"update_roles": "2022-02-06T05:54:06.028Z"
}
]
}
]
}
}

### GET ID USERS

### [GET]http://localhost:5000/api/users/09a89ed8-b085-411c-b459-65e0aa551c80

### RESPONSE

{
"status": true,
"message": "success",
"data": {
"data": {
"id_users": "09a89ed8-b085-411c-b459-65e0aa551c80",
"username": "ek01@",
"email": "pill1@gmail.com",
"password": "$argon2i$v=19$m=4096,t=3,p=1$QIW8J8Yo4YiztbO0Sg8VIA$NP7DmzUwPLD4o/O2gvQmyuoqAvNE2nPkFzggceH6FTs",
"create_users": "2022-02-09T15:00:02.571Z",
"update_users": "2022-02-27T03:22:50.195Z",
"roles": [
{
"id_roles": "b361c7ea-3e32-4e4c-bb29-9d6988cef7fd",
"id_users": "09a89ed8-b085-411c-b459-65e0aa551c80",
"roles": "Admin",
"status": "Enebled",
"create_roles": "2022-02-09T15:00:02.673Z",
"update_roles": "2022-02-27T03:22:50.198Z"
}
]
}
}
}

### UPDATE USERS

### [PUT]http://localhost:5000/api/users/09a89ed8-b085-411c-b459-65e0aa551c80

### REQUEST

{
"username": "ek01@",
"email": "pill1@gmail.com",
"password": "123",
"roles": "Admin",
"status": "Enebled"
}

### RESPONSE

{
"status": true,
"message": "success",
"data": {
"data": {
"id_users": "09a89ed8-b085-411c-b459-65e0aa551c80",
"username": "ek01@",
"email": "pill1@gmail.com",
"password": "$argon2i$v=19$m=4096,t=3,p=1$QIW8J8Yo4YiztbO0Sg8VIA$NP7DmzUwPLD4o/O2gvQmyuoqAvNE2nPkFzggceH6FTs",
"create_users": "2022-02-09T15:00:02.571Z",
"update_users": "2022-02-27T03:22:50.195Z",
"roles": [
{
"id_roles": "b361c7ea-3e32-4e4c-bb29-9d6988cef7fd",
"id_users": "09a89ed8-b085-411c-b459-65e0aa551c80",
"roles": "Admin",
"status": "Enebled",
"create_roles": "2022-02-09T15:00:02.673Z",
"update_roles": "2022-02-27T03:22:50.198Z"
}
]
}
}
}

### DELETE USERS

### [DELETE]http://localhost:5000/api/users/09a89ed8-b085-411c-b459-65e0aa551c80

### RESPONSE

{
"status": true,
"message": "success",
"data": {
"message": "success Delete Users",
"id": "09a89ed8-b085-411c-b459-65e0aa551c80"
}
}

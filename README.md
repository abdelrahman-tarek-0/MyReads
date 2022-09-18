# MyReads

This project is for udacity [react course](https://egfwd.com/specializtion/react-development/?fbclid=IwAR0OS7YUarzL4nwjDbyJ8SzXh8RoOyUWrsMSN42gv8JrG-6qxQx-l5e4E5M).<br />
build a bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read.
<br />
with the ability to search for new books and add them to your bookshelf.

## To run the project

1. download and install [node.js](https://nodejs.org/en/download/)
2. clone the project
3. run _npm install_
4. run _npm start_

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

## Tree Structure

<pre>
C:.
├───public
│       favicon.ico
│       index.html
│
└───src
    │   App.js
    │   index.js
    │
    ├───components
    │   │   BookCard.js
    │   │   Search.js
    │   │
    │   └───shelves
    │           BookShelves.js
    │           Shelf.js
    │
    ├───helpers
    │       camelCase.js
    │
    ├───icons
    │       add.svg
    │       arrow-back.svg
    │       arrow-drop-down.svg
    │
    ├───styles
    │       App.css
    │       index.css
    │
    └───util
            BooksAPI.js
</pre>

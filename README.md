# React Todo List

A simple React app inspired by the first project of the 'Learn React for free' course on Scrimba. I wanted to challenge myself to recreate the app without revisiting the reference code in order to get a better handle on core React concepts such as state management, props, event handling, and conditional rendering.

## Current features

- Update state of each todo item's completed status
- Dynamic styling based on completed status
- Conditionally rendered heading

## Planned features

- Form implementation for adding additional tasks
- Edit and delete functions

## Editing data

Todo items are currently stored in an object in './src/data/todoItems.js'. In the future I plan to implement a form to add new tasks from the UI but, for the timebeing, if you want to make changes to tasks (add/remove/edit) then go to the file above. If you add additional tasks, be sure to assign each one a unique ID as these are required for key prop purposes.

## Installation

In the project directory, you can run:

### `yarn install` / `npm install`

Install all necessary dependencies to be able to run the project.

### `yarn start` / `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

# Glyph Notes

Glyph Notes is a simple note-taking application built with React, Recoil, and Tiptap for rich text editing. With Glyph Notes, you can create, edit, and save notes effortlessly.

## Features

- **Create New Notes:** Click on the "New Note" button to create a new note.
- **Edit Existing Notes:** Open previously saved notes and edit them as needed.
- **Rich Text Editing:** Use a variety of text formatting options, including bold, italic, underline, strikethrough, lists, and more.
- **Customize Font Styles:** Choose from various font families to personalize your notes.
- **Save and Retrieve Notes:** Save your notes locally for easy access and retrieval.
- **Print Notes:** Print your notes with styling and custom filenames.

## Libraries Used

- **React:** A JavaScript library for building user interfaces.
- **Recoil:** A state management library for React applications.
- **Tiptap:** A modern WYSIWYG rich text editor for Vue.js and React.js.

## Folder Structure

glyph-notes/
│
├── public/
│ ├── index.html
│ └── ...
│
├── src/
│ ├── components/
│ │ ├── MainEditor.js
│ │ ├── MainNav.js
│ │ ├── SideView.js
│ │ ├── ShowSavedNotes.js
│ │ └── Main.css
│ │
│ ├── Storage/
│ │ ├── DataFromLocal.js
│ │ └── Processing.js
│ │
│ ├── App.js
│ ├── index.js
│ └── ...
│
├── .gitignore
├── package.json
├── README.md
└── ...

## Components

### MainEditor

The `MainEditor` component is responsible for rendering the main text editor interface. It utilizes the Tiptap library for rich text editing and Recoil for managing the application state. Users can format text, change font styles, undo/redo changes, and save notes.

### MainNav

The `MainNav` component represents the navigation bar of the application. It allows users to create new notes, edit existing notes, and cancel creating a new note. It also utilizes Recoil for managing application state.

### SideView

The `SideView` component displays a side panel containing a list of saved notes. Users can search for specific notes, view note titles, creation dates, and times. Additionally, users can delete notes from the list. This component also relies on Recoil for state management.

### ShowSavedNotes

The `ShowSavedNotes` component displays the content of a saved note. It allows users to view the content of a note and print it with custom filenames.

## Getting Started

To run Glyph Notes locally on your machine, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/glyph-notes.git
   ```

2. Navigate to the project directory:

   ```bash
   cd glyph-notes
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to view Glyph Notes.

## Acknowledgments

- This project was inspired by the need for a simple and efficient note-taking application.
- Special thanks to the developers of React, Recoil, and Tiptap for providing powerful libraries to build web applications.

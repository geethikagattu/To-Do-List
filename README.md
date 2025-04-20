# ✅ React To-Do App

A simple and interactive To-Do list application built with **React.js**. It allows users to add, edit, complete, and delete tasks — all managed through React hooks and functional components.

## 🚀 Features

- Add new tasks 📋
- Edit existing tasks 🖊️
- Mark tasks as completed ✅
- Delete tasks ❌
- Interactive UI with conditional rendering
- Clean and responsive design

## 🛠️ Technologies Used

- React.js (with Hooks)
- JavaScript (ES6+)
- UUID (for unique task IDs)
- FontAwesome Icons
- CSS for styling

## 📁 Project Structure

src/ ├── components/ │ ├── ToDoBox.js # Main component handling logic and state │ ├── Todoform.js # Input form for adding tasks │ ├── ToDo.js # Displays each individual task │ └── Edittodo.js # Edit task form ├── App.js ├── index.js └── styles.css # All styling here


## 🧠 How It Works

- **State Management:** Managed using `useState` for tasks and their properties.
- **Unique Task IDs:** Generated with `uuidv4` to ensure each task is uniquely tracked.
- **Toggling Completion:** Clicking on the task toggles its `completed` status.
- **Editing Tasks:** Opens an edit form dynamically using conditional rendering.
- **Deleting Tasks:** Removes the task from the list instantly.

## 📦 Installation

1. Clone the repository:
https://github.com/geethikagattu/To-Do-List.git cd react-todo-app

2. Install dependencies:
npm install

3. Run the app:
npm start


## 📌 Future Enhancements

- Persist tasks using `localStorage` or a backend
- Add due dates or priorities
- Dark mode toggle
- Drag-and-drop reordering

## 👩‍💻 Author
**Geethika Gattu**  




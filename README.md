# Shopping List App

A full-featured **React + Redux shopping list application** with user authentication, CRUD operations, search, sorting, and persistent storage. This app allows users to manage shopping lists, keep track of quantities, categories, notes, and images, all in a user-friendly interface.

---

## **Live Demo**

[View the app live on GitHub Pages](https://SEKOMANE.github.io/Shopping-List/)

---

## **Features**

- **User Authentication**
  - Register and login with email and password
  - User sessions are persisted in `localStorage`
- **CRUD Operations**
  - Add, view, edit, and delete shopping list items
  - Each item has name, quantity, category, notes, image, and date added
- **Search & Sort**
  - Search items by name
  - Sort items by:
    - Name (ascending/descending)
    - Category (ascending/descending)
    - Date Added (ascending/descending)
- **Persistent Storage**
  - Shopping list data is stored in `localStorage`
- **State Management**
  - Uses **Redux** for global state management
- **Responsive UI**
  - Works on mobile, tablet, and desktop screens
- **Protected Routes**
  - Users must be logged in to access Home and Profile pages
- **Profile Page**
  - Displays registered user details

---

## **Technologies Used**

- React + TypeScript
- Redux Toolkit
- React Router
- LocalStorage for persistence
- CSS for styling
- GitHub Pages for hosting

---

## **Installation**

1. Clone the repository:

```bash
git clone https://github.com/Sekomane/Shopping-List.git
cd Shopping-List
```
2 Clone the repository:

```
npm install
```
3. Start the development server:
   ```
   npm start
   ```

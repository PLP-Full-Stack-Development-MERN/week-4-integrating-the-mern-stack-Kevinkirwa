# MERN Task Manager

MERN Task Manager is a full-stack web application built using the MERN stack. The application allows users to create, read, update, and delete tasks. It features a RESTful API built with Express and MongoDB on the backend and a modern, responsive React frontend created with Vite and styled using Tailwind CSS.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
  - [Backend Setup](#backend-setup)
  - [Frontend Setup](#frontend-setup)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Deployment](#deployment)
- [Testing](#testing)
- [Technologies Used](#technologies-used)
- [License](#license)

## Overview

The MERN Task Manager provides a simple way to manage tasks by performing CRUD (Create, Read, Update, Delete) operations. This project integrates both backend and frontend components and demonstrates the use of RESTful API design, state management with React hooks, and modern styling with Tailwind CSS.

## Features

- **Task Creation:** Add new tasks with a title, description, status, and due date.
- **Task Listing:** View all tasks in a responsive, easy-to-read format.
- **Task Editing:** Update task details including status and due date.
- **Task Deletion:** Remove tasks from the list.
- **Responsive UI:** Styled using Tailwind CSS for a modern look.
- **RESTful API:** Backend built with Express and connected to a MongoDB database.

## Project Structure

```plaintext
mern-task-manager/
├── backend
│   ├── models
│   │   └── Task.js
│   ├── routes
│   │   └── taskRoutes.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend
    ├── index.html
    ├── package.json
    ├── postcss.config.cjs  // or postcss.config.js with ES module syntax
    ├── tailwind.config.js
    ├── vite.config.js
    └── src
        ├── index.css
        ├── main.jsx
        ├── App.jsx
        └── components
            ├── TaskForm.jsx
            ├── TaskItem.jsx
            └── TaskList.jsx

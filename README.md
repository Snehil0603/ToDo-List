# To-Do List Application

## Overview

The To-Do List Application is a simple and intuitive web application that allows users to create, manage, and delete their tasks efficiently. Built with Node.js, Express, MongoDB, and EJS, this app provides a user-friendly interface for organizing daily activities.

## Features

- **Create Tasks**: Add new tasks to your to-do list.
- **Delete Tasks**: Remove tasks that are no longer needed.
- **Persistent Storage**: All tasks are stored in a MongoDB database, ensuring data persistence.
- **Responsive Design**: Accessible on various devices, ensuring a seamless experience.

## Technologies Used

- **Frontend**: HTML, CSS, EJS
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Package Manager**: npm

## Installation

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v20.x or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (for local development) or access to a MongoDB Atlas cluster
- npm (comes with Node.js)

### Steps to Install

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/to-do-list.git
   cd to-do-list
2. Create a .env file in the root directory and add your MongoDB connection string:
   ```bash
   MONGO_URI=your_mongodb_connection_string
3. Start the application:
   ```bash
   node app.js
4. Open your browser and navigate to http://localhost:3000.

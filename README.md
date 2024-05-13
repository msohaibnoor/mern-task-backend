# Car Management System

Welcome to the Car Management System project! This system provides a platform for users to manage and categorize cars, with features including user authentication, CRUD operations for categories and cars, email notifications, and data validation.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS, Formik, Yup, Redux Toolkit
- **Backend**: Node.js, Express.js, JWT
- **Database**: MongoDB

## Project Setup

### Frontend

1. Clone the repository.
2. Navigate to the `frontend` directory.
3. Install dependencies using `npm install`.
4. Start the development server with `npm start`.

### Backend

1. Navigate to the `backend` directory.
2. Install dependencies using `npm install`.
3. Set up your database and configure the connection in `.env` file.
4. Start the server with `npm start`.

## Features

1. **Authentication**: Users can sign up and sign in securely.
2. **Email Notifications**: Upon successful sign-up, users receive a welcome email with a randomly generated password.
3. **Dashboard**: Provides a simple dashboard displaying the number of registered cars.
4. **CRUD Operations**:
   - Categories: Users can create, read, update, and delete categories.
   - Cars: Users can create, read, update, and delete cars, with options to select a category from a dropdown.
5. **Data Tables**: Utilizes data tables for sorting and pagination for enhanced user experience.
6. **Security**: Implements protection against XSS (Cross-Site Scripting) and utilizes JWT (JSON Web Tokens) for authentication.
7. **Data Validation**: Frontend and backend validations are implemented for create and update modules to ensure data integrity.

## Contributors

- [Sohaib Noor](https://github.com/msohaibnoor)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

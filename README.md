# MERN Food Tracker

MERN Food Tracker is a web application built using the MERN stack, which consists of MongoDB, Express, React, and Node.js. It allows users to create, read, update, and delete food items along with tracking the days since they last ate each food item.

## Technologies Used

- MongoDB: A popular NoSQL database used for storing food items and their details.
- Express: A back-end web framework used for building the API endpoints and handling server-side logic.
- React: A JavaScript library used for building the user interface of the application.
- Node.js: A JavaScript runtime environment used for building the back-end server.
- Axios: A popular HTTP client used for making API requests between the front-end and back-end.

## Features

- Create, Read, Update, and Delete (CRUD) operations: Users can add food items, view food items, update the name of food items, and delete food items from the list.
- Days since last ate tracking: Users can see the number of days since they last ate each food item, which is calculated and displayed dynamically.
- Error handling: The application includes error handling for handling any potential errors that may occur during API requests or server-side operations.

## Installation

1. Clone the repository: `git clone https://github.com/JayPTucker/MERN_Food_Tracker.git`
2. Change to the project directory: `cd MERN_Food_Tracker`
3. Install dependencies: `npm install`
4. Start the back-end server: `npm run devStart`
5. Start the front-end development server: `npm start`

## Customization

You can customize the MERN Food Tracker application to suit your needs:

1. Update database connection: Open the `config/db.js` file and update the MongoDB connection URL to your own MongoDB database.
2. Customize styling: Open the `client/src/styles` directory and update the CSS files to customize the styling of the application according to your preferences.

## Deployment

To deploy the MERN Food Tracker application, you can follow the standard deployment process for a MERN stack application. This may involve deploying the front-end and back-end separately or together on a hosting service of your choice, such as Heroku, AWS, or Google Cloud. Follow the deployment instructions provided by the hosting service to publish your application online.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions, comments, or suggestions, please feel free to contact me at [jaypaultucker@gmail.com](mailto:jaypaultucker@gmail.com).

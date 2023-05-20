# Express.js with Sequelize and MySQL Backend Server

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

This is an HTTP server built with Express.js that connects to a MySQL database using Sequelize.

Based from the code and teachings of [Jhon Andrew Baes](mailto:anecbook@gmail.com).

## Table of Contents

- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Dependencies](#dependencies)
- [License](#license)
- [Contact](#contact)

## Installation

To install the project and its dependencies, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Navigate to the project directory: `cd express-sequelize-server`
3. Install dependencies: `npm install`

## Configuration

1. Rename the `dotenv` file to `.env` in the project's root directory.
2. Open the `.env` file and provide the necessary information for the following environment variables:

   ```plaintext
   HOST=<database-host>
   USER=<database-username>
   PASSWORD=<database-password>
   DATABASE=<database-name>
## Usage

To run the application, you can use the following scripts:

- `npm run dev`: Runs the development server using Nodemon, which automatically restarts the server when changes are detected.
- `npm run build`: Transpiles the source files using Babel and outputs them to the `./dist` directory.
- `npm start`: Starts the server by executing the transpiled `server.js` file from the `./dist` directory.

## Technologies Used
1. Express.js: Fast, unopinionated, minimalist web framework for Node.js.
2. Sequelize: A powerful ORM (Object-Relational Mapping) for Node.js, which provides easy database access and management.
3. MySQL: A popular open-source relational database management system.

## Dependencies
The project relies on the following dependencies:
1. cors: CORS middleware for Express.js.
2. dotenv: Loads environment variables from a .env file.
3. helmet: Helps secure Express.js apps with various HTTP headers.
4. indicative: Data validation and sanitization library.
5. jsonwebtoken: JSON Web Token implementation.

Please refer to the `package.json` file for the actual versions used and the check official documentation for each dependency to learn more about its usage and features.

## License

This project is licensed under the terms of the MIT license. See the [LICENSE](LICENSE) file for more information.

## Contact

For any questions or inquiries, please contact:

Author: [Aris D. Moratalla](mailto:arismoratallak@gmail.com)

GitHub: [github.com/arismoratalla](https://github.com/arismoratalla)

# Install and run this test project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In this project I implemented two approaches to run the application:

1- Normal run with npm command line.\
2- Using Docker 

#### Install and run the app using npm command line:
1- Make sure that you have react-scripts installed, if not you have to install them by executing `npm install react-scripts@3.4.1 -g --silent`.\
2- In the command line type `npm install`.\
3- Once the packages are installed you can type `npm start` to start the project.\
4- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
5- To run the tests you can type `npm test`.\
6- To check the lint errors and warnings type `npm run lint`.

#### Install and run the app using docker compose:
In the root of the project you will find `Dockerfile` that represents the docker image that I want to use, you will find a file called `app.yml` which represents the required configurations of the docker compose.

To open start the project using docker compose you have to do the following:

1- In the command line type `docker-compose -f app.yml up -d --build`.\
this command will install the required packages and start the container as a process in the background.\
2- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
3- To run the tests type `docker exec app sh -c "npm test"`.\
4- To run the linter type `docker exec app sh -c "npm run lint"`.\
5- Once you want to stop the container type `docker-compose -f app.yml down`


Main dependencies used in this project:\
1- node.js `12.16.3`.\
2- Node package manager (npm) `6.14.4`.\
3- typescript `4.1.2`.\
4- React.js `17.0.2`.\
5- Redux `4.1.0`.\
6- Material UI `4.11.4`.\

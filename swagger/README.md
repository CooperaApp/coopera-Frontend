# Cooper Swagger API Documentation

This documentation provides information on the endpoints and how to use interface with Coopera API's.

## Overview
Coopera API is designed to simulate the functionality of an automated cooperative platform. It exposes various endpoints that allow you to interact with the system as a registered company/member. This documentation outlines the available endpoints and their usage.

## Requirements 

To run the application, you will need:

1. **Docker:** Make sure you have Docker installed on your computer. You can download it from [https://www.docker.com/get-started](https://www.docker.com/get-started).


## Running the Server

To run locally, follow these steps:

1. Clone the project repository to your local machine:

   ```bash
   git clone https://github.com/CooperaApp/cooperaApp-Backend.git

2. Locate swagger folder and change your working directory to the swagger project folder on your terminal

    ```bash
    % cd $coopera_frontend
    % cd $swagger

3. Run either of the following commands

    ```bash
    % docker-compose up 

    or 

    % docker-compose up -d (detached mode)
    ```

4. Any of the above commands will run the docker-compose.yml file included in the folder. 

    Once completed, the following services will be available:

    - http://localhost:81/ -> Swagger UI Implementation / API Documentation
    - http://localhost:8082/ -> API mock server.
# Drinking Water Fountain Finder API

## Description

Welcome to the Water Fountain Finder API. This API allows for viewing and creating drinking water fountain spots based on city, zip_code, longitude, and latitude. Additionally, each one particular drinking fountain spot can have a list of nearby amenities in JSON format. An amenity could be something like a playground, a park, a baseball field, ect.

This API permits only authenicated users to add and update drinking fountains and nearby amenities associated with the specific drinking fountain. However, non authenicated users are still able to view drinking fountains and its amenities. 

## Installation

To install this API, clone the repository, open terminal, and run this command in that directory. 

```bash
npm install
```

Then run: 
```bash
npm start
```

## Technology Used
This API was created using Node.js, Express, and MongoDB. Postman is recommended to signup/login, and add/update content to the API. 

## Authentication and Authorization
Authentication is required in order to add or edit content in this API

### To Sign Up

Send a `POST` request to the URL `localhost:4040/user/signup` and populate the following fields:
```json
username:
password:
```

### To Log In

After siging up to login send a `POST` request to the URL `localhost:4040/user/login` and provide the following fields:
```json
username:
password:
```

### To Log Out

To logout after logging in send a `POST` request to the URL `localhost:4040/user/logout` and you will be logged out.

## Making Requests

This API has no HTML and only returns JSON data. Below are the processes to make requests with this API

### GET All Drinking Fountains 

Send a `GET` request to URL `localhost:4040/api/fountain/all` to get a list of all drinking fountains.

Data will look like:

```
[
    {
        id: 5e6094d626c1b313bcf24ac1, 
        city: "San Fransico",
        zip-code: "94109", 
        longitude: 38.8951,
        latitude: -77.0364,
        number_of_spouts: 2
        amenities: ["5e61dd6d45f07e49a952c70c",
                    "5e61dd6845f07e49a952c70b"]
    }, 
    
    {
        id: 5e60bfb6ace9583018558ae3, 
        city: "San Fransico",
        zip-code: "94108", 
        longitude: 68.2341,
        latitude: -27.3462,
        number_of_spouts: 1
        amenities: []

    }

]
```

### GET a Specific Drinking Fountain By id 
Send a `GET` request that has the specific id of the fountain to get all information for that particular drinking fountain.<br><br>
The format: `localhost:4040/api/fountain/<fountainID>`<br>
An example: `localhost:4040/api/fountain/5e60bfb6ace9583018558ae3`<br><br>
The data will look like the following:

```
{
    id: 5e6094d626c1b313bcf24ac1, 
    city: "San Fransico",
    zip-code: "94109", 
    longitude: 38.8951,
    latitudes: -77.0364,
    number_of_spouts: 1
}
```

### GET All Amenities Nearby a Specific Drinking Fountain
To get all the amenities nearby that particular drinking fountain
send a `GET` request that has the specific id of the fountain.<br><br>
The format: `localhost:4040/api/fountain/<fountainID>/amenity`<br>
An example: `localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/amenity`<br><br>
The data will look like the following:


```
[
    {
        "_id": "5e61dd6845f07e49a952c70b",
        "name": "Restroom",
        "quantity": 2,
        "more_info": "Wheelchair accessible",
        "__v": 0
    },
    {
        "_id": "5e61dd6d45f07e49a952c70c",
        "name": "Playground",
        "quantity": 1,
        "more_info": "For toddlers",
        "__v": 0
    },
        "_id": "5e61dd6d45f07e49a952c70f",
        "name": "Baseball Field",
        "quantity": 4,
        "more_info": "Lots of parking",
        "__v": 0
    }
]
```

### GET a Specific Amenity of a Specific Drinking Fountain
To get all a specific nearby amenity for that particular drinking fountain
send a `GET` request that has the specific id of the fountain and the specific id of the amenity.<br><br>
The format: `localhost:4040/api/fountain/<fountainiID>/amenity/<amenityID>`<br>
An example: `localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/amenity/5e61dd6d45f07e49a952c70f`<br><br>
The data will look like the following:
```json
{
    "_id": "5e61dd6d45f07e49a952c70f",
    "name": "Baseball Field",
    "quantity": 4,
    "more_info": "Lots of parking",
    "__v": 0
}
```

### POST or Add a New Drinking Fountain Spot
Send a `POST` request to 
```localhost:4040/api/fountain/new```<br><br>
Make sure to populate the required fields: <br>
```json
city:
zip_code:
longitude: 
latitude:
number_of_spouts: 
```


### POST or Add a New Amenity of a drinking Fountain
Send a `POST` request with the specific id of the drinking fountain you want to add an amenity.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/amenity/new`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/amenity/new`<br><br>
Make sure to provide the required fields for the amenity: <br>
```json
name:
quantity:
more_info:
```

### PUT or Edit a Drinking Fountain
Send a `PUT` request with the specific id of the drinking fountain you want to update.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/update`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/update`<br><br>
You can modify any of the fields: <br>
```json
city:
zip_code:
longitude: 
latitude:
number_of_spouts: 
```

### PUT or Edit an Amenity of the Drinking Fountain
Send a `PUT` request with the specific IDs of the drinking fountain and the amenity you want to update the amenity.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/amenity/<amenityID>/update`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/amenity/5e61dd6845f07e49a952c70b/update`<br><br>
You can modify any fields for the amenity: <br>
```json
name:
quantity:
more_info:
```

### DELETE a Specific Drinking Fountain
Send a `DELETE` request with the specific id of the drinking fountain you want to delete.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/delete`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/delete`<br><br>
You will be rerouted back to the main screen

### DELETE a Specific Amenity of a Drinking Fountain
Send a `DELETE` request with the specific id of the drinking fountain and the specific id of the amenity you want to delete.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/amenity/<amenityID>/delete`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/amenity/5e61dd6d45f07e49a952c70f/delete`<br><br>
You will be rerouted back to the main screen


## For Grading Purposes: (Will delete once project is graded)
inside .env file:<br>
NODE_ENV=development<br>
PORT=4040<br>
JWT_SECRET=0a6b944d-d2fb-46fc-a85e-0295c986cd9f<br>
MONGO_HOST=mongodb://localhost:27017/auth-api-starterpack<br>
MONGO_PORT=27017<br>
MONGODB_URI=mongodb://localhost/api


jwt token: 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTYwYjkwYmQ3NWFiYzJjNzk1ZGZjMDgiLCJ1c2VybmFtZSI6IiB1c2VybmFtZSwiLCJpYXQiOjE1ODMzOTg0MTMsImV4cCI6MTU4ODU4MjQxM30.E3009bQO55Wpi_V7t3m_SR6nkAUENbfXzHekwAsuVaY

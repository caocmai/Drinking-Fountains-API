# Drinking Water Fountain Finder API

## Description

Welcome to the Water Fountain Finer API. This API allows for viewing and creating drinking water fountains based on city, zip_code, longitude, and latitude. 

This API permits only authenicated users to add and update driking fountains and nearby amenities associated with the specific driking fountain. However, non authenicated users are still able to view driking fountains and its nearby amenities. 

## Installation

To install this API, clone the repository, open terminal, and run this command in that directory. 

```bash
npm install
```

Then run: 
```js
npm start
```

# Authentication and Authorization
Authentication is required in order to post or update content in this API

## To Sign Up

Send a POST request to the URL `localhost:4040/user/signup` and provide the following fields:
```HTML
username:
password:
```

## To Log In

After siging up to login send a POST request to the URL `localhost:4040/user/login` and provide the following fields:
```HTML
username:
password:
```

# Making Requests
This api has no HTML and only returns JSON data. Below are the processes to make requests with this API

## GET All Drinking Fountains 

Send a GET request to URL `localhost:4040/api/fountain/all` to get a list of all drinking fountains.

Data will look like:

```json
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

## GET a Specific Drinking Fountain By id 
Send a GET request that has the specific id of the fountain.<br><br>
The format: `localhost:4040/api/fountain/<id>`<br>
An example: `localhost:4040/api/fountain/5e60bfb6ace9583018558ae3`<br><br>
The data will look like the following:

```json
{
    id: 5e6094d626c1b313bcf24ac1, 
    city: "San Fransico",
    zip-code: "94109", 
    longitude: 38.8951,
    latitudes: -77.0364,
    number_of_spigots: 1
}
```

## GET All Amenities Nearby a Specific Drinking Fountain
To get all the amenities nearby that particular driking fountain
send a GET request that has the specific id of the fountain.<br><br>
The format: `localhost:4040/api/fountain/<id>/amenity`<br>
An example: `localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/amenity`<br><br>
The data will look like the following:


```json
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

## GET a Specific Amenity of a Specific Drinking Fountain
To get all a specific nearby that particular driking fountain
send a GET request that has the specific id of the fountain and the specific id of the amenity.<br><br>
The format: `localhost:4040/api/fountain/<id>/amenity/`<br>
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

## POST a New Drinking Fountain Spot
Send a POST request to 
```localhost:4040/api/fountain/new```<br><br>
Make sure to provide the required fields: <br>
```html
city:
zip_code:
longitude: 
latitude:
number_of_spouts: 
```


## POST a New Amenity of a Driking Fountain
Send a POST request with the specific id of the driking fountain you want to add an amenity.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/amenity/new`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/amenity/new`<br><br>
Make sure to provide the required fields for the amenity: <br>
```html
name:
quantity:
more_info:
```

## PUT or Edit a Drinking Fountain
Send a PUT request with the specific id of the driking fountain you want to update.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/update`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/update`<br><br>
You can modify any of the fields: <br>
```html
city:
zip_code:
longitude: 
latitude:
number_of_spouts: 
```

## PUT or Edit an Amenity of the Drinking Fountain
Send a PUT request with the specific IDs of the driking fountain and the amenity you want to update the amenity.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/amenity/<amenityID>/update`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/amenity/5e61dd6845f07e49a952c70b/update`<br><br>
You can modify any fields for the amenity: <br>
```html
name:
quantity:
more_info:
```

## DELETE a Specific Drinking Fountain
Send a DELETE request with the specific id of the driking fountain you want to delete.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/delete`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/delete`<br><br>
You will be rerouted back to the main screen

## DELETE a Specific Amenity of a Drinking Fountain
Send a DELETE request with the specific id of the driking fountain and the specific id of the amenity you want to delete.<br><br>
The format:
`localhost:4040/api/fountain/<fountainID>/amenity/<amenityID>/delete`<br>
An example:
`localhost:4040/api/fountain/5e60bfb6ace9583018558ae3/amenity/5e61dd6d45f07e49a952c70f/delete`<br><br>
You will be rerouted back to the main screen


# Additional Info
jwt token: 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTYwYjkwYmQ3NWFiYzJjNzk1ZGZjMDgiLCJ1c2VybmFtZSI6IiB1c2VybmFtZSwiLCJpYXQiOjE1ODMzOTg0MTMsImV4cCI6MTU4ODU4MjQxM30.E3009bQO55Wpi_V7t3m_SR6nkAUENbfXzHekwAsuVaY
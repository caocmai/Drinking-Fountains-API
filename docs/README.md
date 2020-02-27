# Water Fountain Finder API

## Description

Find water fountain locations based city and zip-code.

## Installation

To install this API, clone the repository, open terminal, and run this command in that directory. 

```bash
npm install
```

Then run: 
```js
npm start
```

# How to Make Requests

## Get All Drinking Fountains 

Send a GET request to URL `localhost:3000/list` to get a list of all dogs.

Data will look like:

```json
[
    {
        id: 1, 
        city: "San Fransico",
        zip-code: "94109", 
        longitude: 38.8951,
        latitude: -77.0364,
        number_of_spouts: 2
    }, 
    
    {
        id: 2, 
        city: "San Fransico",
        zip-code: "94108", 
        longitude: 68.2341,
        latitude: -27.3462,
        number_of_spouts: 1

    }

]
```

## Get a specific drinking fountain by id 

The data will look like the following:

```json
{
    id: 1, 
    city: "San Fransico",
    zip-code: "94109", 
    longitude: 38.8951,
    latitudes: -77.0364,
    number_of_spigots: 1
}
```

## Additional Amenities Nearby a Specific Fountain

```json
[
    {
        id: 1, 
        amentity: "Restroom",
        quantity: 2,
        add_info: "Restrooms next to the fountains"

    },

    {
        id: 2, 
        amentity: "Playground",
        quantity: 1,
        add_info: "Playground is a bit dated"

    },

    {
        id: 2, 
        amentity: "Baseball Field",
        quantity: 2,
        add_info: "Baseball fields can be accessed accoss the road"

    }

]
```

## Add a 

## Remove a 

## Edit a 
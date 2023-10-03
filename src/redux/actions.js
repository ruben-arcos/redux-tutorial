// an action is an object
// we pass objects to reducers

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        // sometimes value is called payload
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}


export const addFavCountries = (favCountries) => {
    return {
        type: 'ADD_FAVCOUNTRIES',
        // sometimes value is called payload
        value: favCountries
    }
}

export const removeFavCountries = (index) => {
    return {
        type: 'REMOVE_FAVCOUNTRIES',
        value: index
    }
}

// Rule!
// *Object with keys: type and value
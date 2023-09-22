// an action is an object
// we pass objects to reducers

export const addCar = () => {
    return {
        type: 'ADD_CAR',
        // sometimes value is called payload
        value: "Ford"
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

// Rule!
// *Object with keys: type and value
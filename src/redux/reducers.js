// !Rules
/**
 * !Rules
 * all properties on state have a reducers!!!
 * all reducers get exported in the combinedReducers object
 * all reducers must return state cannot return undefined
        * to prevent we give a value
 *  reducers are functions that always return states
 * reducers need to take an action to know what type of action and value needs to perform
 * ex. type: 'REMOVE_CAR'
 *       value: 'which car??'
 * are switch action creators?
 */
// import { act } from "react-dom/test-utils";
import { combineReducers } from "redux";

const cars = (state = [], action) => {
    // switch takes some type of condition
    switch(action.type) {

        case  "ADD_CAR" : 
            // to add at the end
            // return [...state, action.value]
            // to add at the beggining of list
            return [action.value, ...state]

        case "REMOVE_CAR" : 
            // spread state to create copy of state
            // otherwise this will allow this reducer 
            // to manipulate states. this will violate
            // the rules of mutability
            let newState = [...state]
            // splice out what needs to be removed
            // use action since in actions.js we passed index as value
            newState.splice(action.value, 1)
            return newState

        default : 
            return state;
    }
}

const favCountries = (state = [], action) => {
    // switch takes some type of condition
    switch(action.type) {

        case  "ADD_FAVCOUNTRIES" : 
            // to add at the end
            return [...state, action.value]
            // to add at the beggining of list
            // return [action.value, ...state]

        case "DELETE_FAVCOUNTRIES" : 
            // spread state to create copy of state
            // otherwise this will allow this reducer 
            // to manipulate states. this will violate
            // the rules of mutability
            let newState = [...state]
            // splice out what needs to be removed
            // use action since in actions.js we passed index as value
            newState.splice(action.value, 1)
            return newState

        default : 
            return state;
    }
}

// give default param here
const hello = (state = null) => state
const fName = (state = null) => state
// const cars = (state = []) => state
const user = (state = null) => state
const cats = (state = null) => state
const animals = (state = null) => state


export default combineReducers({hello, cars, user, fName, cats, animals, favCountries})


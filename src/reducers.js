// rules
// * all properties in state have reducers
// * all reducers get exported in the combineReducers object
// * all reducers must return state cannot return undefined, to prevent we give a default parameter
// * reducers are functions that always return states

import { combineReducers } from "redux";
import state from "./state";

// give default param here
const hello = (state = null) => state
const fName = (state = null) => state
const cars = (state = []) => state
const user = (state = null) => state
const cats = (state = null) => state
const animals = (state = null) => state
const favCountries = (state = null) => state

export default combineReducers({hello, cars, user, fName, cats, animals, favCountries})
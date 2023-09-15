// takes stores and reducers
// import/export createStore
// reducers first, state second

import { legacy_createStore as createStore } from "redux";

import reducers from "./reducers";
import state from "./state";

export default createStore(reducers, state)

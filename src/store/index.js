import {createStore, applyMiddleware} from "redux"
// import {configureStore, applyMiddleware} from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"

const initialState = {
    dataUser: "Pak Fatah",
    age: 40,
    allData: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "CHANGE_NAME":
                // return{dataUser: action.payload};
                return{...state, dataUser: action.payload};

        case "GET_ALL_DATA":
                return{...state, allData: action.payload};

        default:
            return state;
    }
}

let store = createStore(reducer, applyMiddleware(thunk))
// let store = configureStore({reducer:reducer})
export default store
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunkMiddleware from "redux-thunk";
import {productsReducer} from "./productsReducer";

const reducers = combineReducers({
    products: productsReducer
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export type StateType = ReturnType<typeof reducers>

// @ts-ignore
window.__store__ = store
import { combineReducers, createStore } from "redux";
import todos from "../slice/todos";

const rootReducer = combineReducers({ todos });

export const store = createStore(rootReducer);

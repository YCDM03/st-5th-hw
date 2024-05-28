// import { combineReducers, createStore } from "redux";
// import todos from "../slices/todos";

// const rootReducer = combineReducers({ todos });

// export const store = createStore(rootReducer);

/////////////////////////////////////////////
//비교를 위해 일부러 남겨둔 코드입니다.(redux VS redux+RTK?)//
//////////////////////////////////////////////////////////////////
import { configureStore } from "@reduxjs/toolkit";
import todosSlice from "../slices/todosSlice";

const store = configureStore({
  reducer: {
    todos: todosSlice,
  },
});

export default store;

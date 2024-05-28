// const ADD_TODO = "ADD_TODO";

// export const addTodo = (payload) => {
//   return { type: ADD_TODO, payload: payload };
// };

// const initialState = JSON.parse(localStorage.getItem("texts")) ?? ["Make todo"];

// const todos = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return [...state, action.payload];
//     default:
//       return state;
//   }
// };

// export default todos;
/////////////////////////////////////////////
//비교를 위해 일부러 남겨둔 코드입니다.(redux VS redux+RTK?)//
//////////////////////////////////////////////////
import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("texts")) ?? ["Make todo"];

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
  },
});

export const { addTodo } = todosSlice.actions;
export default todosSlice.reducer;

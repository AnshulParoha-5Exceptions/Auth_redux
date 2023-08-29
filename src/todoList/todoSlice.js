import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push(action.payload)
        },
        deleteTask: (state, action) => {
            const index = action.payload;
            state.tasks.splice(index, 1)
        },
        completeTask: (state, action) => {
            const index = action.payload;
            state.tasks[index].completed = !state.tasks[index].completed;
        }
    }
})

export const {addTask, deleteTask, completeTask} = todoSlice.actions;

export default todoSlice.reducer;
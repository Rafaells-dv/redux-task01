import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";


interface Task {
    id: number;
    title: string;
}

interface TasksState {
    tasks: Task[]
}

const initialState: TasksState = {
    tasks: []
}

const taskSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<Task>) => {
            state.tasks.push(action.payload);
        },
        editTask: (state, action: PayloadAction<{ id: number; newTitle: string }>) => {
            state.tasks = state.tasks.map((task) =>
                task.id === action.payload.id ? { ...task, title: action.payload.newTitle } : task
            );
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter(task => {
                task.id == action.payload;
            });
        }
        
    }
})

export const {addTask, editTask, removeTask} = taskSlice.actions;
export default taskSlice.reducer;
import {combineReducers} from "redux";
import projectReducer from "./todoProject/project-reducer";
import {taskReducer} from "./todoTask/task-reducer";


export const rootReducer = combineReducers({
    projects: projectReducer,
    todo: taskReducer
})

export type RootState = ReturnType<typeof rootReducer>
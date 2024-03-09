import { Reducer } from "react";
import { AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AddTaskReducer, NameOfTaskReducer } from "./MainForm/reducer";

export const SET_COMMENT = "SET_COMMENT";
export const SET_FROM_LOCAL = "SET_FROM_LOCAL";
export const SET_NAME_OF_TASK= "SET_NAME_OF_TASK";
export const ADD_TASK = "ADD_TASK";
export type Task = {
    title: string;
    count: number;
    id: number;
}

export type ToLocalType = {
    arrayOfTasks: Task[];
    comment: string;
    nameOfTask: string;
}

export type RootState = {
    Local: ToLocalType;
    isFromLocal: boolean;
}
const initialState: RootState = {
    Local: {
        arrayOfTasks: [],
        comment: '',
        nameOfTask: '',
    },
    isFromLocal: true,
}




export const rootReducer: Reducer<RootState, AnyAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_OF_TASK:
            return {...state, Local: NameOfTaskReducer(state.Local, action), isFromLocal: action.isFromLocal};
        case ADD_TASK:
            return {...state, Local: AddTaskReducer(state.Local, action), isFromLocal: action.isFromLocal};
        case SET_FROM_LOCAL: 
            return {...state, Local: action.stateFromLocal,  isFromLocal: action.isFromLocal};
        default:
            break;
    }
    return state;
};

export const composeEnhancers = composeWithDevTools({});
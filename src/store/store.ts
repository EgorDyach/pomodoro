import { Reducer } from "react";
import { AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AddTaskReducer } from "./MainForm/reducer";

export const SET_COMMENT = "SET_COMMENT";
export const SET_FROM_LOCAL = "SET_FROM_LOCAL";
export const SET_NAME_OF_TASK= "SET_NAME_OF_TASK";
export const ADD_TASK = "ADD_TASK";
export const SET_ACTIVE_MENU_ID = 'SET_ACTIVE_MENU_ID';
export type Task = {
    title: string;
    count: number;
    id: number;
}

export type ToLocalType = {
    arrayOfTasks: Task[];
    comment: string;
}

export type RootState = {
    Local: ToLocalType;
    isFromLocal: boolean;
    activeMenuID: number;
}
const initialState: RootState = {
    Local: {
        arrayOfTasks: [],
        comment: '',
    },
    isFromLocal: true,
    activeMenuID: 0,
}




export const rootReducer: Reducer<RootState, AnyAction> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {...state, Local: AddTaskReducer(state.Local, action), isFromLocal: action.isFromLocal};
        case SET_ACTIVE_MENU_ID:
            return {...state, activeMenuID: action.activeMenuID}
        case SET_FROM_LOCAL: 
            return {...state, Local: action.stateFromLocal,  isFromLocal: action.isFromLocal};
        default:
            break;
    }
    return state;
};

export const composeEnhancers = composeWithDevTools({});
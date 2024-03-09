import { Reducer } from "react";
import { AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export type Task = {
    title: string;
    count: number;

}

export type ToLocalType = {
    arrayOfTasks: Task[];
    comment: string;
}

export type RootState = {
    Local: ToLocalType;
    isFromLocal: boolean;
}
const initialState: RootState = {
    Local: {
        arrayOfTasks: [],
        comment: '',
    },
    isFromLocal: true,
}

export const meReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    switch (action.type) {
        case SET_COMMENT:
            return {
                ...state,
                comment: action.Local.comment,
            }
        default:
            return state
    }
}

const SET_COMMENT = "SET_COMMENT";
const SET_FROM_LOCAL = "SET_FROM_LOCAL";
export const rootReducer: Reducer<RootState, AnyAction> = (state = initialState, action) => {
    switch (action.type) {
        case SET_COMMENT:
            return {...state, Local: meReducer(state.Local, action), isFromLocal: action.isFromLocal};
        case SET_FROM_LOCAL: 
            return {...state, Local: action.stateFromLocal,  isFromLocal: action.isFromLocal};
        default:
            break;
    }
    return state;
};

export const composeEnhancers = composeWithDevTools({});
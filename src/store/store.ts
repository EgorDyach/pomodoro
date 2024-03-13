import { modalReducer } from './modal/reducer';
import { Reducer } from "react";
import { AnyAction } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AddTaskReducer } from "./MainForm/reducer";
import { plusReducer } from './modal/plusReducer';
import { minusReducer } from './modal/minusReducer';
import { deleteReducer } from './modal/deleteReducer';
import { changeReducer } from './modal/changeReducer';
import { themeReducer } from './Theme/reducer';
import { upPriorityReducer } from './menu/upPriority';
import { downPriorityReducer } from './menu/downPriority';

export const SET_COMMENT = "SET_COMMENT";
export const SET_FROM_LOCAL = "SET_FROM_LOCAL";
export const SET_NAME_OF_TASK = "SET_NAME_OF_TASK";
export const ADD_TASK = "ADD_TASK";
export const SET_ACTIVE_MENU_ID = 'SET_ACTIVE_MENU_ID';
export const OPEN_MODAL_PLUS = "OPEN_MODAL_PLUS";
export const OPEN_MODAL_MINUS = "OPEN_MODAL_MINUS";
export const OPEN_MODAL_CHANGE = "OPEN_MODAL_CHANGE";
export const OPEN_MODAL_DELETE = "OPEN_MODAL_DELETE";
export const IS_NOT_OPEN = "IS_NOT_OPEN";
export const TASK_COUNT_PLUS = "TASK_COUNT_PLUS";
export const TASK_COUNT_MINUS = "TASK_COUNT_MINUS";
export const TASK_DELETE = "TASK_DELETE";
export const TASK_CHANGE_NAME = "TASK_CHANGE_NAME";
export const CHANGE_THEME = "CHANGE_THEME";
export const CHANGE_PRIORITY_UP = "CHANGE_PRIORITY_UP";
export const CHANGE_PRIORITY_DOWN = "CHANGE_PRIORITY_DOWN";
export type Task = {
    title: string;
    count: number;
    id: number;
}

export type ModalType = 'OPEN_MODAL_PLUS' | 'OPEN_MODAL_MINUS' | 'OPEN_MODAL_CHANGE' | 'OPEN_MODAL_DELETE' | 'IS_NOT_OPEN'

export type ToLocalType = {
    arrayOfTasks: Task[];
    comment: string;
    appTheme: 'dark' | 'light';
}

export type RootState = {
    Local: ToLocalType;
    isFromLocal: boolean;
    activeMenuID: number;
    modalType: ModalType;
}
const initialState: RootState = {
    Local: {
        arrayOfTasks: [],
        comment: '',
        appTheme: 'light'
    },
    isFromLocal: true,
    activeMenuID: 0,
    modalType: 'IS_NOT_OPEN',
}




export const rootReducer: Reducer<RootState, AnyAction> = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return { ...state, Local: AddTaskReducer(state.Local, action), isFromLocal: false };
        case SET_ACTIVE_MENU_ID:
            return { ...state, activeMenuID: action.activeMenuID }
        case SET_FROM_LOCAL:
            return { ...state, Local: action.stateFromLocal, isFromLocal: true };
        case OPEN_MODAL_CHANGE:
        case OPEN_MODAL_PLUS:
        case OPEN_MODAL_DELETE:
        case OPEN_MODAL_MINUS:
        case IS_NOT_OPEN:
            return modalReducer(state, action);
        case TASK_COUNT_PLUS:
            return {
                ...state,
                Local: plusReducer(state.Local, action), 
                isFromLocal: false
            }
        case TASK_COUNT_MINUS:
            return {
                ...state,
                Local: minusReducer(state.Local, action), 
                isFromLocal: false
            }
        case TASK_DELETE:
            return {
                ...state,
                Local: deleteReducer(state.Local, action), 
                isFromLocal: false
            }
        case TASK_CHANGE_NAME:
            return {
                ...state,
                Local: changeReducer(state.Local, action),
                isFromLocal: false
            }
        case CHANGE_THEME:
            return {
                ...state,
                Local: themeReducer(state.Local, action),
                isFromLocal: false
            }
        case CHANGE_PRIORITY_UP:
            return {
                ...state,
                Local: upPriorityReducer(state.Local, action),
                isFromLocal: false
            }
        case CHANGE_PRIORITY_DOWN:
            return {
                ...state,
                Local: downPriorityReducer(state.Local, action),
                isFromLocal: false
            }
        default:
            break;
    }
    return state;
};

export const composeEnhancers = composeWithDevTools({});
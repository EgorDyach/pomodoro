import { modalReducer } from './modal/reducer';
import { Reducer } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { AddTaskReducer } from "./MainForm/reducer";
import { plusReducer } from './modal/plusReducer';
import { minusReducer } from './modal/minusReducer';
import { deleteReducer } from './modal/deleteReducer';
import { changeReducer } from './modal/changeReducer';
import { themeReducer } from './Theme/reducer';
import { upPriorityReducer } from './menu/upPriority';
import { downPriorityReducer } from './menu/downPriority';
import { ADD_TASK, SET_ACTIVE_MENU_ID, SET_FROM_LOCAL, OPEN_MODAL_CHANGE, OPEN_MODAL_PLUS, OPEN_MODAL_DELETE, OPEN_MODAL_MINUS, IS_NOT_OPEN, TASK_COUNT_PLUS, TASK_COUNT_MINUS, TASK_DELETE, TASK_CHANGE_NAME, CHANGE_THEME, CHANGE_PRIORITY_UP, CHANGE_PRIORITY_DOWN, CHANGE_SETTINGS, MODAL_OPEN_DELETE_DATA, SET_IS_PLAYING_TIMER, END_OF_TASK_TOMATO, SAVE_TIME_OF_TASK, CHANGE_NOTIFICATION_SOUND } from './dataForStore';
import { changeSettings } from './timeSettings/changeSettings';
import { endOfTaskTomato } from './MainForm/endOfTaskTomato';
import { saveTimeOfTask } from './MainForm/saveTimeOfTask';
import { notificatonSoundReducer } from './notifications/notificationSoundReducer';
import SoundDefault from "../assets/sounds/soundOfNotification__default.mp3";

export type Task = {
    title: string;
    count: number;
    id: number;
    activeTomato: number;
    timeOfTask: number;
}

export type ModalType = 'OPEN_MODAL_PLUS' | 'OPEN_MODAL_MINUS' | 'OPEN_MODAL_CHANGE' | 'OPEN_MODAL_DELETE' | 'IS_NOT_OPEN' | 'MODAL_OPEN_DELETE_DATA';

export type ToLocalType = {
    arrayOfTasks: Task[];
    comment: string;
    appTheme: 'dark' | 'light';
    timeOfTomato: number;
    timeOfLittleBreak: number;
    timeOfLongBreak: number;
    isNotificationsOn: boolean;
    frequencyLongBreak: number;
    isAutoPlay: boolean;
    countOfBreaks: number;
    soundOfNotification: string;
}  

export type RootState = {
    Local: ToLocalType;
    isFromLocal: boolean;
    activeMenuID: number;
    modalType: ModalType;
    isPlayingTimer: boolean;
    isStartedTimer: boolean;
    isBreakTimer: boolean;
}

export const initialState: RootState = {
    Local: {
        arrayOfTasks: [],
        comment: '',
        appTheme: 'dark',
        timeOfTomato: 25,
        timeOfLittleBreak: 5,
        timeOfLongBreak: 20,
        isNotificationsOn: true,
        isAutoPlay: true,
        frequencyLongBreak: 4,
        countOfBreaks: 1,
        soundOfNotification: SoundDefault
    },
    isFromLocal: true,
    activeMenuID: 0,
    modalType: 'IS_NOT_OPEN',
    isPlayingTimer: false,
    isStartedTimer: false,
    isBreakTimer: false
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
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
        case MODAL_OPEN_DELETE_DATA:
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

        case CHANGE_SETTINGS:
            return {
                ...state,
                Local: changeSettings(state.Local, action),
                isFromLocal: false
            }

        case CHANGE_THEME:
            return {
                ...state,
                Local: themeReducer(state.Local, action),
                isFromLocal: false
            }

        case SET_IS_PLAYING_TIMER:
            return {
                ...state,
                isPlayingTimer: action.isPlaying,
                isStartedTimer: action.isStarted,
                isBreakTimer: action.isBreakTimer
            }
        case END_OF_TASK_TOMATO:
            return {
                ...state,
                Local: endOfTaskTomato(state.Local, action),
                isPlayingTimer: false,
                isStartedTimer: false,
                isFromLocal: false,
                isBreakTimer: true
            }
        case SAVE_TIME_OF_TASK:
            return {
                ...state,
                Local: saveTimeOfTask(state.Local, action),
                isPlayingTimer: action.isPlaying,
                isFromLocal: false
            }
        case CHANGE_NOTIFICATION_SOUND:
            return {
                ...state,
                Local: notificatonSoundReducer(state.Local, action),
                isFromLocal: false
            }
        default:
            break;
    }
    return state;
};

export const composeEnhancers = composeWithDevTools({});
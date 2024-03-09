import { Reducer } from "react"
import { AnyAction } from "redux"
import { ADD_TASK, SET_NAME_OF_TASK, ToLocalType } from "../store"

export const NameOfTaskReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    switch (action.type) {
        case SET_NAME_OF_TASK:
            return {
                ...state,
                nameOfTask: action.Local.nameOfTask,
            }
        default:
            return state
    }
}

export const AddTaskReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                arrayOfTasks: [...state.arrayOfTasks, action.newTask]
            }
        default:
            return state
    }
}


import { Reducer } from "react"
import { AnyAction } from "redux"
import { ADD_TASK, ToLocalType } from "../store"



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


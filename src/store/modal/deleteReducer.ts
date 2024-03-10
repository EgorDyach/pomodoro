import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const deleteReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    const tasks = state.arrayOfTasks
    const newTasks = tasks.filter(e => e.id !== action.idOfTask)
    return {
        ...state,
        arrayOfTasks: newTasks
    }
}


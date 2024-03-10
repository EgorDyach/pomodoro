import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const plusReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    const tasks = state.arrayOfTasks
    const task = tasks.find(e=> e.id === action.idOfTask)
    if (typeof task === 'undefined') {
        return state;
    }
    task.count = task.count + action.countPlus
    const newTasks = tasks.map(e => e.id === task.id ? task : e)
    return {
        ...state,
        arrayOfTasks: newTasks
    }
}


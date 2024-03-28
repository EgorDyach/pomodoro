import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const upPriorityReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    const tasks = state.arrayOfTasks
    const task = tasks.find(e=> e.id === action.activeMenuID)
    if (typeof task === 'undefined') {
        return state;
    }
    const wasTask = tasks[tasks.indexOf(task) - 1]
    tasks[tasks.indexOf(task)] = wasTask
    tasks[tasks.indexOf(wasTask)] = task

    return {
        ...state,
        arrayOfTasks: tasks
    }
}


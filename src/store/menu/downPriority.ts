import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const downPriorityReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    const tasks = state.arrayOfTasks
    const task = tasks.find(e=> e.id === action.activeMenuID)
    if (typeof task === 'undefined') {
        return state;
    }
    const wasTask = tasks[tasks.indexOf(task) + 1]
    tasks[tasks.indexOf(wasTask)] = task
    tasks[tasks.indexOf(task)] = wasTask

    return {
        ...state,
        arrayOfTasks: tasks
    }
}


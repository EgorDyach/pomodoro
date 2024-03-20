import { Reducer } from "react"
import { AnyAction } from "redux"
import {  Task, ToLocalType } from "../store"


export const saveTimeOfTask: Reducer<ToLocalType, AnyAction> = (state, action) => {
    const tasks = state.arrayOfTasks
    const active: Task = action.active
    const newTasks = tasks.map(e => e.id !== active.id ? e : {...e, timeOfTask: action.timeOfTask})
    return {
        ...state,
        arrayOfTasks: newTasks
    }
}


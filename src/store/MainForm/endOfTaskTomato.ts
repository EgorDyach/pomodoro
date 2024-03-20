import { Reducer } from "react"
import { AnyAction } from "redux"
import {  Task, ToLocalType } from "../store"


export const endOfTaskTomato: Reducer<ToLocalType, AnyAction> = (state, action) => {
    const tasks = state.arrayOfTasks
    const active: Task = action.active
    if (active.count === active.activeTomato) {
        const newTasks = tasks.filter(e => e.id !== active.id)
        return {
            ...state,
            arrayOfTasks: newTasks
        }
    } else {
        const newTasks = tasks.map(e => (e.id !== active.id ? e : {
            activeTomato: active.activeTomato+1, 
            count: active.count,
            id: active.id,
            title: active.title,
            timeOfTask: state.timeOfTomato*60
        }))
        return {
            ...state,
            arrayOfTasks: newTasks
        }
    }
}


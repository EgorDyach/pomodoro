import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const changeSettings: Reducer<ToLocalType, AnyAction> = (state, action) => {
    const tasks = state.arrayOfTasks;
    const newTasks = tasks.map(({timeOfTask, title, activeTomato, id, count }) => {
        if (timeOfTask === state.timeOfTomato*60) {
            return {
                timeOfTask: action.timeOfTomato*60,
                title, activeTomato, id, count
            }
        } else {
            return {
                timeOfTask, title, activeTomato, id, count
            }   
        }
    })
    return {
        ...state,
        arrayOfTasks: newTasks,
        timeOfTomato: action.timeOfTomato,
        isNotificationsOn: action.isNotificationsOn,
        timeOfLittleBreak: action.timeOfLittleBreak,
        timeOfLongBreak: action.timeOfLongBreak,
        frequencyLongBreak: action.frequencyLongBreak,
        isAutoPlay: action.isAutoPlay
    }
}


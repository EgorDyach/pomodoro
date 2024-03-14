import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const changeSettings: Reducer<ToLocalType, AnyAction> = (state, action) => {
    return {
        ...state,
        timeOfTomato: action.timeOfTomato,
        isNotificationsOn: action.isNotificationsOn,
        timeOfLittleBreak: action.timeOfLittleBreak,
        timeOfLongBreak: action.timeOfLongBreak
    }
}


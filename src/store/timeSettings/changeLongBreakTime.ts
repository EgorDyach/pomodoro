import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const changeLongBreakTime: Reducer<ToLocalType, AnyAction> = (state, action) => {
    return {
        ...state,
        timeOfLongBreak: action.timeOfLongBreak
    }
}


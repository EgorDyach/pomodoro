import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const changeLittleBreakTime: Reducer<ToLocalType, AnyAction> = (state, action) => {
    return {
        ...state,
        timeOfLittleBreak: action.timeOfLittleBreak
    }
}


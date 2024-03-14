import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const changeTomatoTime: Reducer<ToLocalType, AnyAction> = (state, action) => {
    return {
        ...state,
        timeOfTomato: action.timeOfTomato
    }
}


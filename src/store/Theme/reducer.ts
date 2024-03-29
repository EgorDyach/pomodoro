import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const themeReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    return {
        ...state,
        appTheme: action.newTheme
    }
}


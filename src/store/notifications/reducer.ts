import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const notificatonsReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    return {
        ...state,
        isNotificationsOn: action.isNotificationsOn
    }
}


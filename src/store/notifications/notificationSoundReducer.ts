import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const notificatonSoundReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    return {
        ...state,
        soundOfNotification: action.soundOfNotification
    }
}


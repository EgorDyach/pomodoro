import { Reducer } from "react"
import { AnyAction } from "redux"
import { ToLocalType } from "../store"

export const changeSelectActive: Reducer<ToLocalType, AnyAction> = (state, action) => {
    return ({
        ...state,
        statisticOptionActiveIndex: action.newActiveIndex
    })
}


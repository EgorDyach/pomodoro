import { Reducer } from "react"
import { AnyAction } from "redux"
import {  ToLocalType } from "../store"
import { ADD_TASK } from "../dataForStore"


export const AddTaskReducer: Reducer<ToLocalType, AnyAction> = (state, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                arrayOfTasks: [...state.arrayOfTasks, action.newTask]
            }
        default:
            return state
    }
}


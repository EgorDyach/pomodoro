import { Reducer } from "react"
import { AnyAction } from "redux"
import { RootState } from "../store"
import {OPEN_MODAL_CHANGE, OPEN_MODAL_MINUS, OPEN_MODAL_PLUS, OPEN_MODAL_DELETE, IS_NOT_OPEN} from "../dataForStore"
export const modalReducer: Reducer<RootState, AnyAction> = (state, action) => {
    switch (action.type) {
        case IS_NOT_OPEN:
            return {
                ...state,
                modalType: 'IS_NOT_OPEN'
            }
        case OPEN_MODAL_CHANGE:
            return {
                ...state,
                modalType: 'OPEN_MODAL_CHANGE'
            }
        case OPEN_MODAL_DELETE:
            return {
                ...state,
                modalType: 'OPEN_MODAL_DELETE'
            }
        case OPEN_MODAL_MINUS:
            return {
                ...state,
                modalType: 'OPEN_MODAL_MINUS'
            }
        case OPEN_MODAL_PLUS:
            return {
                ...state,
                modalType: 'OPEN_MODAL_PLUS'
            }
        default:
            return state
    }
}


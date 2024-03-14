
import { Dispatch, AnyAction } from "redux"
import { SET_ACTIVE_MENU_ID } from "../../store/dataForStore"

export const handleCancel = (dispatch: Dispatch<AnyAction>) => {
    dispatch({ type: "IS_NOT_OPEN" })
    document.body.style.overflow = 'scroll'
    dispatch({ type: SET_ACTIVE_MENU_ID, activeMenuID: 0 })
  }
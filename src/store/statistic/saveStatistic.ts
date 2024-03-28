import { Reducer } from "react"
import { AnyAction } from "redux"
import { StatisticDay, StatisticTomato, ToLocalType } from "../store"




export const saveStatistic: Reducer<ToLocalType, AnyAction> = (state, action) => {
    const days = state.statistic.days
    const day = new Date().toLocaleString("ru-RU", { year: 'numeric', month: "numeric", day: "numeric" })
    const res = days.find(e => e.day === day)
    const newDays = days.filter(e => e.day !== day)
    console.log(days, action)
    if (typeof res !== 'undefined') {
        res.timeOfWork = res.timeOfWork + action.timeOfWork;
        res.timeOfPause = res.timeOfPause + action.timeOfPause;
        if (action.isDone) {
            const resTomato = res.taskStatistic.find(e => e.id === action.active.id)
            const newTomatos = res.taskStatistic.filter(e => e.id !== action.active.id);
            if (typeof resTomato !== 'undefined') {
                resTomato.countOfPauses += action.countOfPauses
                newTomatos.push(resTomato)
            } else {
                const newTomato = {
                    title: action.active.title,
                    countOfPauses: action.countOfPauses,
                    id: action.active.id,
                }
                newTomatos.push(newTomato)
            }
            res.taskStatistic = newTomatos
        }
        newDays.push(res)
    } else {
        const newDay: StatisticDay = {
            day: day,
            timeOfWork: action.timeOfWork,
            timeOfPause: action.timeOfPause,
            taskStatistic: []
        }
        if (action.isDone) {
            const newTomato: StatisticTomato = {
                title: action.active.title,
                countOfPauses: action.countOfPauses,
                id: action.active.id,
            }
            newDay.taskStatistic = [newTomato]
        }
        newDays.push(newDay)
    }
    return {
        ...state,
        statistic: {
            days: newDays
        }
    }
}


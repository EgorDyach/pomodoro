export function formatTime(time: number, type: 'short' | 'middle' | 'long' | "without" | "longStatistic"): string {
    if (type === 'without') {
        const timeArr: number[] = []
        let res = ''
        timeArr.push(Math.floor(time / 60))
        timeArr.push(time - timeArr[0] * 60)
        if (timeArr[0] === 0) {
          res += `00:`
        } else if (timeArr[0] < 10) {
          res += `0${Math.floor(timeArr[0])}:`
        } else {
          res += `${Math.floor(timeArr[0])}:`
        }
        if (timeArr[1] === 0) {
          res += `00`
        } else if (timeArr[1] < 10) {
          res += `0${Math.floor(timeArr[1])}`
        } else {
          res += `${Math.floor(timeArr[1])}`
        }
      
        return res;
    }
    let res = '';
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time - hours * 3600) / 60);
    const seconds = Math.floor((time - hours * 3600 - minutes * 60));
    if (hours !== 0) {
        if (type !== 'long' && type !== 'longStatistic') {
            res += `${hours}ч `
        } else {
            if ((5 < hours && 19 > hours) || ((hours % 10) >= 5)) {
                res += `${hours} часов `
            } else if (hours % 10 == 1) {
                res += `${hours} час${type === 'longStatistic' ? 'а ': " "}`
            } else {
                res += `${hours} часа `
            }
        }
    }
    if (minutes !== 0) {
        if (type === 'short') {
            res += `${minutes}м `
        }else if (type === 'middle') {
            res += `${minutes} мин `
        } else {
            if ((5 < minutes && 19 > minutes) || ((minutes % 10) >= 5)) {
                res += `${minutes} минут `
            } else if (minutes % 10 == 1) {
                res += `${minutes} минут${type === 'longStatistic' ? 'ы ': " "}`
            } else {
                res += `${minutes} минуты `
            }
        }
    }
    if (seconds !== 0) {
        if (type === 'short') {
            res += `${seconds}с `
        }else if (type === 'middle') {
            res += `${seconds} сек `
        } else {
            if ((5 < seconds && 19 > seconds) || ((seconds % 10) >= 5)) {
                res += `${seconds} секунд`
            } else if (seconds % 10 == 1) {
                res += `${seconds} секунд${type === 'longStatistic' ? 'ы': ""}`
            } else {
                res += `${seconds} секунды`
            }
        }
    }
    return res;
}
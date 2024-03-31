export function getWeeksDates(currentDate: Date, weeksBack: number = 0) {
    const daysInWeek = 7; // Количество дней в неделе
    const startOfWeek = currentDate.getDay() || 7; // Получаем день недели по индексу (0-6), где 0 - воскресенье
    
    // Вычисляем дату начала недели, учитывая количество недель назад
    const firstDayThisWeek = new Date(currentDate);
    firstDayThisWeek.setDate(firstDayThisWeek.getDate() - startOfWeek + 1 - weeksBack * daysInWeek);
  
    const datesThisWeek: string[] = [];
    for (let day = 1; day <= daysInWeek; day++) {
      const date = new Date(firstDayThisWeek);
      date.setDate(date.getDate() + day - 1); // Добавляем дни для получения остальных дней недели
      datesThisWeek.push(date.toLocaleString("ru-RU", { year: 'numeric', month: "numeric", day: "numeric" }));
    }
  
    return datesThisWeek;
  }
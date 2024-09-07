type DayItem = {
  year: number
  month: number
  day: number
}

const formatDate = (data: Date): DayItem => {
  return {
    year: data.getFullYear(),
    month: data.getMonth() + 1,
    day: data.getDate(),
  }
}

const getMonthDays = (year: number, month: number) => {
  return new Date(year, month, 0).getDate()
}

const getMonthFirstDayWeek = (year: number, month: number) => {
  return new Date(year, month - 1, 1).getDay()
}

export const getThisMonthDays = (date?: Date): Date[] => {
  const now = formatDate(date || new Date())
  const prevMouthDays = getMonthFirstDayWeek(now.year, now.month)
  const currentMonthDays = getMonthDays(now.year, now.month)
  const nextMouthDays = 7 - ((prevMouthDays + currentMonthDays) % 7)
  return [
    ...new Array(prevMouthDays).fill(null).map((_, index) => {
      return new Date(now.year, now.month - 1, index + 1 - prevMouthDays)
    }),
    ...new Array(currentMonthDays).fill(null).map((_, index) => {
      return new Date(now.year, now.month - 1, index + 1)
    }),
    ...new Array(nextMouthDays === 7 ? 0 : nextMouthDays)
      .fill(null)
      .map((_, index) => {
        return new Date(now.year, now.month, index + 1)
      }),
  ]
}

export const isDateEqual = (a: Date, b: Date) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export const getDaysByDate = (a: Date, b: Date) => {
  const date = [a]
  const isBefore = a.getTime() > b.getTime()
  const isAfter = a.getTime() < b.getTime()
  if (isDateEqual(a, b)) {
    return []
  }
  if (isAfter) {
    while (!isDateEqual(date[date.length - 1], b)) {
      date.push(new Date(date[date.length - 1].getTime() + 86400000))
    }
  }
  if (isBefore) {
    while (!isDateEqual(date[date.length - 1], b)) {
      date.push(new Date(date[date.length - 1].getTime() - 86400000))
    }
  }
  return date
}

import { useMemo, useState } from 'react'
import { getDaysByDate, getThisMonthDays, isDateEqual } from './utils'
import * as styles from './styles'
import clsx from 'clsx'

export default function DatePicker() {
  const [year, setYear] = useState(new Date().getFullYear())
  const [month, setMonth] = useState(new Date().getMonth() + 1)
  const days = useMemo(() => {
    return getThisMonthDays(new Date(year, month - 1))
  }, [year, month])
  const [selectedDay, setSelectedDay] = useState<Date[]>([])
  const onSubMonth = () => {
    setMonth(month - 1)
    if (month === 1) {
      setYear(year - 1)
      setMonth(12)
    }
  }
  const onAddMonth = () => {
    setMonth(month + 1)
    if (month === 12) {
      setYear(year + 1)
      setMonth(1)
    }
  }
  const onSelectedDay = (item: Date) => {
    setSelectedDay((prev) => {
      if (prev.some((i) => isDateEqual(i, item))) {
        return []
      }
      if (prev.length === 0) {
        return [item]
      }
      if (prev.length === 1) {
        return getDaysByDate(prev[0], item)
      }
      if (prev.length > 1) {
        const first = prev[0]
        const last = prev[prev.length - 1]
        if (
          item.getTime() > first.getTime() &&
          item.getTime() < last.getTime()
        ) {
          return []
        }
        if (item.getTime() < first.getTime()) {
          return getDaysByDate(item, last)
        }
        if (item.getTime() > last.getTime()) {
          return getDaysByDate(first, item)
        }
      }
      throw new Error('invalid state')
    })
  }
  return (
    <div className={styles.layout}>
      <div className={styles.header}>
        <div className={styles.monthSelect} onClick={onSubMonth}>
          {'<'}
        </div>
        <div className={styles.headerMonth}>
          <span>{year}</span>
          <span>/</span>
          <span>{month}</span>
        </div>
        <div className={styles.monthSelect} onClick={onAddMonth}>
          {'>'}
        </div>
      </div>
      <div className={styles.pickerRow}>
        {days.map((item) => {
          const isCurrent = month === item.getMonth() + 1
          const isToday = isDateEqual(item, new Date())
          const isActive = selectedDay.some((i) => isDateEqual(i, item))
          return (
            <button
              key={item.getTime()}
              onClick={() => onSelectedDay(item)}
              className={clsx(styles.dayButton, styles.dayState, {
                [styles.dayStateCurrent]: isCurrent,
                [styles.dayStateToday]: isToday,
                [styles.dayStateActive]: isActive,
              })}
              disabled={!isCurrent}>
              {item.getDate()}
            </button>
          )
        })}
      </div>
    </div>
  )
}

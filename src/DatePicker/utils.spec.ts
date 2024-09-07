import { describe, it, expect } from 'vitest'
import { getThisMonthDays, isDateEqual, getDaysByDate } from './utils'

describe('getThisMonthDays', () => {
  it('should return days of this month', () => {
    const days = getThisMonthDays(new Date('2024-09-08'))
    expect(days.length).toBe(35)
    expect(
      days.map(
        (day) => `${day.getFullYear()}/${day.getMonth() + 1}/${day.getDate()}`,
      ),
    ).toEqual([
      '2024/9/1',
      '2024/9/2',
      '2024/9/3',
      '2024/9/4',
      '2024/9/5',
      '2024/9/6',
      '2024/9/7',
      '2024/9/8',
      '2024/9/9',
      '2024/9/10',
      '2024/9/11',
      '2024/9/12',
      '2024/9/13',
      '2024/9/14',
      '2024/9/15',
      '2024/9/16',
      '2024/9/17',
      '2024/9/18',
      '2024/9/19',
      '2024/9/20',
      '2024/9/21',
      '2024/9/22',
      '2024/9/23',
      '2024/9/24',
      '2024/9/25',
      '2024/9/26',
      '2024/9/27',
      '2024/9/28',
      '2024/9/29',
      '2024/9/30',
      '2024/10/1',
      '2024/10/2',
      '2024/10/3',
      '2024/10/4',
      '2024/10/5',
    ])
  })
})

describe('isDateEqual', () => {
  it('should return true if two dates are equal', () => {
    const a = new Date('2024-01-01')
    const b = new Date('2024-01-01')
    expect(isDateEqual(a, b)).toBe(true)
  })
  it('should return false if two dates are not equal', () => {
    const a = new Date('2024-01-01')
    const b = new Date('2024-01-02')
    expect(isDateEqual(a, b)).toBe(false)
  })
})

describe('getDaysByDate', () => {
  it('should return days between two dates', () => {
    const a = new Date('2024-01-01')
    const b = new Date('2024-01-03')
    const days = getDaysByDate(a, b)
    expect(days.length).toBe(3)
  })
  it('should return days between two dates', () => {
    const a = new Date('2024-01-03')
    const b = new Date('2024-01-01')
    const days = getDaysByDate(a, b)
    expect(days.length).toBe(3)
  })
  it('should return empty array if two dates are equal', () => {
    const a = new Date('2024-01-01')
    const b = new Date('2024-01-01')
    const days = getDaysByDate(a, b)
    expect(days.length).toBe(0)
  })
})

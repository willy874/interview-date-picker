import { css } from '@emotion/css'

export const layout = css(`
  width: 350px;
  height: 240px;
  font-size: 16px;
  color: #333;
`)

export const header = css(`
  display: flex;
  width: 350px;
  height: 44px;
  margin-bottom: 2px;
`)

export const headerMonth = css(`
  flex: 1;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`)

export const monthSelect = css(`
  width: 44px;
  height: 44px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  :hover {
    background-color: #e6e6e6;
  }
  :active {
    background-color: #c9c9c9;
  }
`)

export const pickerRow = css(`
  display: flex;
  flex-wrap: wrap;
`)

export const dayButton = css(`
  width: 50px;
  height: 36px;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;
  color: #333;
  :disabled {
    cursor: not-allowed;
    color: #c0c0c0;
    background-color: #f0f0f0;
  }
`)

export const dayState = css(`
  background-color: white;
`)

export const dayStateCurrent = css(`
  :hover {
    background-color: #e6e6e6;
  }
  :active {
    background-color: #c9c9c9;
  }
`)

export const dayStateToday = css(`
  background-color: #ffff76;
  color: #333;
`)

export const dayStateActive = css(`
  background-color: #006edc;
  color: white;
`)

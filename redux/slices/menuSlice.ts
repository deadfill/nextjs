import { createSlice } from '@reduxjs/toolkit'

import type { AppState } from '../store'

export interface CounterState {
  opened: boolean
}

const initialState: CounterState = {
  opened: true,
}

export const menuSlice = createSlice({
  name: 'menuOpened',
  initialState,
  reducers: {
    setOpened: (state) => {
      !state.opened
    },
  },
})

export const { setOpened } = menuSlice.actions

export const selectCount = (state: AppState) => state.menuOpened.opened


export default menuSlice.reducer
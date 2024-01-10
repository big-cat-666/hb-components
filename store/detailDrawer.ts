import { createSlice } from '@reduxjs/toolkit'

export interface DrawerConfig {
  id: number
  accountType: string
  defaultActiveTab?: string
  platformType?: string
  statisticsStartTime?: number
  statisticsEndTime?: number
}

export const detailDrawerSlice = createSlice({
  name: 'detailDrawer',
  initialState: {
    open: false,
    config: {} as DrawerConfig,
    secondaryOpen: false,
    secondaryConfig: {} as DrawerConfig,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload
    },
    setDrawerConfig: (state, action) => {
      if (action.payload.id === state.config.id) return
      state.config = action.payload
    },
    setSecondaryOpen: (state, action) => {
      state.secondaryOpen = action.payload
    },
    setSecondaryDrawerConfig: (state, action) => {
      if (action.payload.id === state.secondaryConfig.id) return
      state.secondaryConfig = action.payload
    },
  },
})

export const {
  setOpen,
  setDrawerConfig,
  setSecondaryOpen,
  setSecondaryDrawerConfig,
} = detailDrawerSlice.actions

export default detailDrawerSlice.reducer

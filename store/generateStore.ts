import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

export const initialPage = {
  total: 0,
  pageSize: 20,
  currentPage: 1,
}

export const initialSorter = {
  field: undefined,
  order: undefined,
}

export type Pagination = {
  total: number
  pageSize: number
  currentPage: number
}

export type Sorter = {
  field?: string
  order?: string
  columnKey?: string
}

export function generateStoreAction(name: string) {
  const commonPageSlice = createSlice({
    name,
    initialState: {
      activeTabKey: '',
      data: {} as Record<string, unknown>, // 包含 filter，list，collapsed 三种数据
      pagination: {} as Record<string, Pagination>,
      sorter: {} as Record<string, Sorter>,
      statusType: '1',
    },
    reducers: {
      setActiveTabKey(state, action: PayloadAction<string>) {
        state.activeTabKey = action.payload
      },
      setPagination(
        state,
        action: PayloadAction<{ key: string; config: Pagination }>,
      ) {
        const { key, config } = action.payload
        state.pagination[key] = config
      },
      setSorter(state, action: PayloadAction<{ key: string; config: Sorter }>) {
        const { key, config } = action.payload
        state.sorter[key] = config
      },
      setData(state, action: PayloadAction<{ key: string; data: unknown }>) {
        const { key, data } = action.payload
        state.data[key] = data
      },
      setStatusType(state, action: PayloadAction<string>) {
        state.statusType = action.payload
      },
    },
  })
  return commonPageSlice
}

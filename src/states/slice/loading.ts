import { createSlice } from '@reduxjs/toolkit'

type TInitialState = {
  isLoading: boolean
}

const initialState: TInitialState = {
  isLoading: false,
}

export const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    setOpenLoading: (state) => {
      state.isLoading = true
    },
    setCloseLoading: (state) => {
      state.isLoading = false
    },
  },
})

export const { setOpenLoading, setCloseLoading } = loadingSlice.actions

export default loadingSlice.reducer

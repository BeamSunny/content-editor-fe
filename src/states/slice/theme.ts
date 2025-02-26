import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TTheam = 'LIGHT' | 'DARK'

type TInitialState = {
  theme: TTheam
}

const initialState: TInitialState = {
  theme: 'LIGHT',
}

export const theamSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheam: (state, action: PayloadAction<{ theme: TTheam }>) => {
      state.theme = action.payload.theme
    },
  },
})

export const { setTheam } = theamSlice.actions

export default theamSlice.reducer

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type TSetOpenModalConfirm = {
  title: string
  description: string
  nextFunction: (() => void) | null
  titleButtonCancel?: string
  titleButtonSave?: string
}

type TInitialState = {
  isOpen: boolean
  title: string
  description: string
  nextFunction: (() => void) | null
  titleButtonCancel: string
  titleButtonSave: string
}

const initialState: TInitialState = {
  isOpen: false,
  title: '',
  description: '',
  nextFunction: null,
  titleButtonCancel: '',
  titleButtonSave: '',
}

export const modalConfirmSlice = createSlice({
  name: 'modalConfirm',
  initialState,
  reducers: {
    setOpenModalConfirm: (state, action: PayloadAction<TSetOpenModalConfirm>) => {
      state.isOpen = true
      state.title = action.payload?.title
      state.description = action.payload.description
      state.nextFunction = action.payload.nextFunction
      state.titleButtonCancel = action.payload?.titleButtonCancel || 'Cancel'
      state.titleButtonSave = action.payload?.titleButtonSave || 'Save'
    },
    setCloseModalConfirm: (state) => {
      state.isOpen = false
      state.title = ''
      state.description = ''
      state.nextFunction = null
      state.titleButtonCancel = ''
      state.titleButtonSave = ''
    },
  },
})

export const { setOpenModalConfirm, setCloseModalConfirm } = modalConfirmSlice.actions

export default modalConfirmSlice.reducer

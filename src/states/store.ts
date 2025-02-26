import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import theme from './slice/theme'
import loading from './slice/loading'
import modalConfirm from './slice/modalConfirm'

export const store = configureStore({
  reducer: {
    theme,
    loading,
    modalConfirm,
  },
  middleware: [thunk],
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

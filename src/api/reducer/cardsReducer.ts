import { createSlice } from '@reduxjs/toolkit'
import { PayloadType } from './types'

const todoSlice = createSlice({
  name: 'posts',
  initialState: {
    post: [],
    FilterPost: false,
  },
  reducers: {
    PostsReceived(store, action) {
      store.post = action.payload
    },
    DeletePost(store, action) {
      store.post = store.post.filter(
        (todoitem: PayloadType) => todoitem.id !== action.payload.id
      )
    },
    LikePost(store, action) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const toggledTodo: any = store.post.find(
        (todoitem: PayloadType) => todoitem.id === action.payload.id
      )
      if (toggledTodo) {
        toggledTodo.completed = !toggledTodo.completed
      }
    },
    FilterPost(store) {
      store.FilterPost = !store.FilterPost
    },
  },
})

export const { PostsReceived, DeletePost, LikePost, FilterPost } =
  todoSlice.actions
export default todoSlice.reducer

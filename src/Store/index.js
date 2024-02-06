import { configureStore } from '@reduxjs/toolkit'
import MySlices from "./Slices"

export const store = configureStore({
  reducer: {
    name: MySlices,
  },
})

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const MySlices = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   SignupUser(state, action){
console.log("SignUp Action", action.payload);
   },
   LoginUser(state,action){
    console.log("Login Action", action.payload)
   }
  },
})

// Action creators are generated for each case reducer function
export default MySlices.reducer
export const {SignupUser, LoginUser } = MySlices.actions
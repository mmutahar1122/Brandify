import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 Signup_users:[],
 Login_users:[],
 Contactus_users:[],
}

export const MySlices = createSlice({
  name: 'counter',
  initialState,
  reducers: {
   SignupUser(state, action){
     state.Signup_users = action.payload
     console.log("SignUp Action", action.payload);
   },
   LoginUser(state,action){
    state.Login_users = action.payload
    console.log("Login Action", action.payload)
   },
   contactusUsers(state, action){
    state.Contactus_users = action.payload
    console.log("Contact us Users", action.payload);
   }
  },
})

// Action creators are generated for each case reducer function
export default MySlices.reducer
export const {SignupUser, LoginUser,contactusUsers } = MySlices.actions
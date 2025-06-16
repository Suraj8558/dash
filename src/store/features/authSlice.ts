import { createSlice } from '@reduxjs/toolkit'
import reducer from './counterSlice';

// Define a type for the slice state
interface authState {
  isLoggedIn: boolean
}

// Define the initial state using that type
const initialState: authState = {
  isLoggedIn: false,
}

const  AuthSlice = createSlice({
  name: 'auth',
  initialState,
  reducers : {
    logIn: (state) => {
      state.isLoggedIn = true;  
    },

    logOut: (state) => {
      state.isLoggedIn =  false;
    }
  }
})

export const { logIn , logOut} = AuthSlice.actions;
export default AuthSlice.reducer;
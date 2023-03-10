import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  account: [],
}

export const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    addAccount: (state, action) => {
      console.log("check action", action)
      state.account.push(action)
    },

    removeAccount:(state) =>{
      state.account = []
    }

  },
})

// Action creators are generated for each case reducer function
export const { addAccount,removeAccount } = accountSlice.actions

export default accountSlice.reducer;
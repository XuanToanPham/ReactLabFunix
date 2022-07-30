import { createSlice } from "@reduxjs/toolkit";
const initialStateFormLogin = {
  onShow: false,
};
export const formLogin = createSlice({
  name: "formLogin",
  initialState: initialStateFormLogin,
  reducers: {
    showFormLogin(state) {
        state.onShow = true;
    },
    hideFormLogin(state){
        state.onShow = false;
    }
  },
});

export const formLoginActions = formLogin.actions;

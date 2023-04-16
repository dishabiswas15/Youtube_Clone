import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false; //we are hard coding it as we want to collapse the sidebar whenever we load watch page
    }
  },
});

export const {toggleMenu, closeMenu} = appSlice.actions;
export default appSlice.reducer;

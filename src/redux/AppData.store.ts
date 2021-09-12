import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: {
    user: null,
    isSidebarToggled: false,
  },
  reducers: {
    toggleSidebar(state) {
      state.isSidebarToggled = !state.isSidebarToggled;
    },
  },
});

export default app.reducer;

export const { toggleSidebar } = app.actions;

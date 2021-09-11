import { createSlice } from "@reduxjs/toolkit";

const app = createSlice({
  name: "app",
  initialState: {
    user: null,
  },
  reducers: {},
});

export default app.reducer;

//export const {} = app.actions;

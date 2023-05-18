import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	open: false,
};

export const drawerSlice = createSlice({
	name: "drawerState",
	initialState,
	reducers: {
		toggleDrawer: (state) => {
			if (state.open) {
				state.open = false;
			} else {
				state.open = true;
			}
		},
	},
});

export const { toggleDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;

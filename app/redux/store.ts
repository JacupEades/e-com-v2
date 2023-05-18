"use client";
import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./slices/drawerSlice";
import { combineReducers } from "redux";

// Define the root state type by combining the individual reducer state types
type RootState = ReturnType<typeof rootReducer>;

// Combine all reducers into a root reducer
const rootReducer = combineReducers({
	drawer: drawerReducer,
	// Add other reducers here
});

const store = configureStore({
	reducer: rootReducer,
});

export type { RootState }; // Export RootState type
export default store;

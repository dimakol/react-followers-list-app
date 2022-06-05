import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../../interfaces/IUser";

// Define a type for the slice state
interface UserState {
  user: User | null;
  isLoadingUser: boolean;
  isErrorOnUser: boolean;
  errorContentOfUser: string;
}

// Define the initial state using that type
const initialState: UserState = {
  user: null,
  isLoadingUser: false,
  isErrorOnUser: false,
  errorContentOfUser: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoadingUser = true;
    },
    hasError: (state, action: PayloadAction<string>) => {
      state.isErrorOnUser = true;
      state.errorContentOfUser = action.payload;
      state.isLoadingUser = false;
    },
    closeError: (state) => {
      state.isErrorOnUser = false;
    },
    userSuccess(state, action: PayloadAction<User>) {
      state.user = action.payload;
      state.isLoadingUser = false;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;

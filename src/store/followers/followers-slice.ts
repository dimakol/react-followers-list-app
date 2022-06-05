import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Followers from "../../interfaces/IFollowers";

// Define a type for the slice state
interface FollowersState {
  followers: Followers[];
  isLoadingFollowers: boolean;
  isErrorOnFollowers: boolean;
  errorContentOfFollowers: string;
  pageNumber: number;
}

// Define the initial state using that type
const initialState: FollowersState = {
  followers: [],
  isLoadingFollowers: false,
  isErrorOnFollowers: false,
  errorContentOfFollowers: "",
  pageNumber: 0,
};

const followersSlice = createSlice({
  name: "followers",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.isLoadingFollowers = true;
    },
    hasError: (state, action: PayloadAction<string>) => {
      state.isErrorOnFollowers = true;
      state.errorContentOfFollowers = action.payload;
      state.isLoadingFollowers = false;
    },
    closeError: (state) => {
      state.isErrorOnFollowers = false;
    },
    followersSuccess(state, action: PayloadAction<Followers[]>) {
      state.followers = action.payload;
      state.isLoadingFollowers = false;
    },
    initData: (state) => {
      state = initialState;
    },
    handlePageChange(state, action: PayloadAction<number>) {
      state.pageNumber = action.payload;
    },
  },
});

export const followersActions = followersSlice.actions;

export default followersSlice;

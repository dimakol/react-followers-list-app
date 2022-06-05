import { Dispatch } from "@reduxjs/toolkit";
import { followersActions } from "./followers-slice";
import { api } from "../../api/index";
import getErrorMessage from "../../utils/error";

export const fetchUserFollowers = (username: string, page: number) => {
  return async (dispatch: Dispatch) => {
    dispatch(followersActions.startLoading());
    try {
      const followersData = await api.get(
        `/users/${username}/followers?page=${page}`
      );
      const accountFollowers = followersData.data.map((followers: any) => ({
        login: followers.login,
        id: followers.id,
        avatar_url: followers.avatar_url,
        html_url: followers.html_url,
      }));
      dispatch(followersActions.followersSuccess(accountFollowers));
    } catch (error) {
      dispatch(followersActions.hasError(getErrorMessage(error)));
    }
  };
};

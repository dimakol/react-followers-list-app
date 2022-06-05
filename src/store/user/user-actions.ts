import { Dispatch } from "@reduxjs/toolkit";
import { userActions } from "./user-slice";
import { api } from "../../api/index";
import getErrorMessage from "../../utils/error";

export const fetchUserData = (username: string) => {
  return async (dispatch: Dispatch) => {
    dispatch(userActions.startLoading());
    try {
      const userData = await api.get(`/users/${username}`);
      const userDetails = userData.data;
      const partialUserDetails = {
        login: userDetails.login,
        id: userDetails.id,
        avatar_url: userDetails.avatar_url,
        html_url: userDetails.html_url,
        name: userDetails.name,
        company: userDetails.company,
        blog: userDetails.blog,
        location: userDetails.location,
        public_repos: userDetails.public_repos,
        public_gists: userDetails.public_gists,
        followers: userDetails.followers,
        following: userDetails.following,
      };
      dispatch(userActions.userSuccess(partialUserDetails));
    } catch (error) {
      dispatch(userActions.hasError(getErrorMessage(error)));
    }
  };
};

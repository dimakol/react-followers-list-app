import React, { ChangeEvent, KeyboardEvent, useState } from "react";
// Import material ui components
import { Box, Grid, Stack, Typography, Backdrop } from "@mui/material";
// Import custom hooks
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
// Import actions
import { userActions } from "./store/user/user-slice";
import { fetchUserData } from "./store/user/user-actions";
import { followersActions } from "./store/followers/followers-slice";
import { fetchUserFollowers } from "./store/followers/followers-actions";
// Import custom components
import { MUITextField } from "./components/MUITextField/MUITextField";
import { MUIButton } from "./components/MUIButton/MUIButton";
import { MUIProgress } from "./components/MUIProgress/MUIProgress";
import { MUIAlert } from "./components/MUIAlert/MUIAlert";
import { MUDataTable } from "./components/MUIDataTable/MUIDataTable";

function App() {
  const dispatch = useAppDispatch();
  const [inputName, setInputName] = useState("");
  const { user, isLoadingUser, isErrorOnUser, errorContentOfUser } =
    useAppSelector((state) => state.user);
  const {
    followers,
    isLoadingFollowers,
    isErrorOnFollowers,
    errorContentOfFollowers,
    pageNumber,
  } = useAppSelector((state) => state.followers);
  const appTitle = "List followers of a Github user";

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputName(event.target.value);
  };

  // Submit on Enter key press if there is input
  const handleInputKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (inputName.length) {
      dispatch(fetchUserData(inputName));
      dispatch(followersActions.initData());
      dispatch(fetchUserFollowers(inputName, 1));
    }
  };

  const closeUserError = () => {
    dispatch(userActions.closeError());
  };

  const closeFollowersError = () => {
    dispatch(followersActions.closeError());
  };

  const handlePageChange = (newPage: number) => {
    dispatch(followersActions.handlePageChange(newPage));
    if (user) dispatch(fetchUserFollowers(user.login, newPage + 1));
  };

  return (
    <React.Fragment>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoadingUser || isLoadingFollowers}
      >
        <MUIProgress />
      </Backdrop>

      {isErrorOnUser && (
        <MUIAlert alertMessage={errorContentOfUser} onClose={closeUserError} />
      )}
      {isErrorOnFollowers && (
        <MUIAlert
          alertMessage={errorContentOfFollowers}
          onClose={closeFollowersError}
        />
      )}

      <Box
        mt={3}
        sx={{
          width: "100%",
        }}
      >
        <Typography variant="h2" textAlign="center">
          {appTitle}
        </Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mt={4}
        >
          <Stack spacing={2} direction="row">
            <MUITextField
              value={inputName}
              onChange={handleInputChange}
              onKeyPress={handleInputKeyPress}
              user={user?.avatar_url}
            />
            <MUIButton
              onClick={handleSubmit}
              disabled={inputName.length === 0}
            />
          </Stack>
        </Grid>
        <Box
          mt={3}
          sx={{
            width: "28%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {user && followers.length ? (
            <MUDataTable
              rows={followers}
              total={user.followers}
              handlePageChange={handlePageChange}
              page={pageNumber}
              isLoading={isLoadingFollowers}
            />
          ) : null}
        </Box>
      </Box>
    </React.Fragment>
  );
}

export default App;

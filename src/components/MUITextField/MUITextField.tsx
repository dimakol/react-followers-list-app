import { ChangeEventHandler, KeyboardEventHandler } from "react";
import { TextField, InputAdornment, Avatar } from "@mui/material";
import AccountCircle from "@mui/icons-material/AccountCircle";

interface IMUITextFieldProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onKeyPress: KeyboardEventHandler<HTMLInputElement>;
  user: string | undefined;
}

export const MUITextField: React.FC<IMUITextFieldProps> = ({
  value,
  onChange,
  onKeyPress,
  user,
}) => (
  <TextField
    id="input-name"
    label="Name"
    color="secondary"
    placeholder="Github account name"
    value={value}
    onChange={onChange}
    onKeyPress={onKeyPress}
    InputProps={{
      startAdornment: (
        <InputAdornment position="start">
          {!user && <AccountCircle />}
          {user && <Avatar src={user} sx={{ width: 24, height: 24 }}></Avatar>}
        </InputAdornment>
      ),
    }}
    variant="standard"
  />
);

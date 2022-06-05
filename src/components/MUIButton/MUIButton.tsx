import { MouseEventHandler } from "react";
import Button from "@mui/material/Button";

interface IMUIButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

export const MUIButton: React.FC<IMUIButtonProps> = ({ onClick, disabled }) => (
  <Button
    variant="contained"
    size="small"
    color="secondary"
    onClick={onClick}
    disabled={disabled}
  >
    Submit
  </Button>
);

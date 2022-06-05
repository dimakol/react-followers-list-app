import { Alert, AlertTitle } from "@mui/material";

interface IMUIAlertProps {
  alertMessage: string;
  onClose: () => void;
}

export const MUIAlert: React.FC<IMUIAlertProps> = ({
  alertMessage,
  onClose,
}) => (
  <Alert severity="error" onClose={onClose}>
    <AlertTitle>Error</AlertTitle>
    <strong>{alertMessage}</strong>
  </Alert>
);

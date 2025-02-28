import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Typography,
} from "@mui/material";

import { client, getConsentStorage } from "./core";
import { getLocale } from "../locale";

export function ConsentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const consent = getConsentStorage().get();
    if (consent === undefined) {
      setOpen(true);
    }

    if (consent) {
      client.opt_in_capturing();
    }
  }, []);

  const handleAccept = () => {
    getConsentStorage().set(true);
    client.opt_in_capturing();
    setOpen(false);
  };

  const handleDecline = () => {
    getConsentStorage().set(false);
    client.opt_out_capturing();
    setOpen(false);
  };
  // https://mui.com/material-ui/react-popper/#scroll-playground
  return (
    <Dialog open={open} onClose={handleDecline}>
      <DialogTitle>{getLocale("analytics.consentHeader")}</DialogTitle>
      <DialogContent>
        <Typography>{getLocale("analytics.consentDescription")}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDecline} color="secondary" variant="outlined">
          {getLocale("analytics.consentDecline")}
        </Button>
        <Button onClick={handleAccept} color="primary" variant="contained">
          {getLocale("analytics.consentAccept")}
        </Button>
      </DialogActions>
    </Dialog>
  );
}

"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

interface ConfirmationDialogueProps {
  showConfirmationDialogue: boolean;
  setShowConfirmationDialogue: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoutConfirmationDialogue = ({
  showConfirmationDialogue,
  setShowConfirmationDialogue,
}: ConfirmationDialogueProps) => {
  return (
    <React.Fragment>
      <Dialog
        open={showConfirmationDialogue}
        aria-labelledby="confirmation-dialogue"
        aria-describedby="confirmation-dialogue"
      >
        <DialogTitle id="alert-dialog-title">
          {"Logout Confirmation"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="confirmation-dialogue">
            Are you sure you want to logout?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setShowConfirmationDialogue(false)}
            variant="contained"
            sx={{
              backgroundColor: "gray",
              color: "white",

              "&:hover": {
                backgroundColor: "gray",
              },
            }}
          >
            Cancel
          </Button>
          <Button
            onClick={() => {
              localStorage.clear();
              setShowConfirmationDialogue(false);
            }}
            autoFocus
            variant="contained"
            sx={{
              color: "white",
            }}
            color="error"
          >
            Logout
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default LogoutConfirmationDialogue;

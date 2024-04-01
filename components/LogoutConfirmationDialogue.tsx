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
          {/* Cancel Logout */}
          <button
            className="bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 rounded"
            onClick={() => setShowConfirmationDialogue(false)}
          >
            Cancel
          </button>

          {/* Logout User */}
          <button
            className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded"
            onClick={() => {
              // Logout User
              // Remove Token
              document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
              setShowConfirmationDialogue(false);
            }}
          >
            Logout
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default LogoutConfirmationDialogue;

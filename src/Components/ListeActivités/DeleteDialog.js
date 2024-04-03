import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function DeleteDialog({open, handleClose}) {
 

  return (
    
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"        
      >
        <DialogTitle id="alert-dialog-title">
          {"Etes vous surs?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
              Voulez-vous vraiment supprimer ce choix d'activité ? Cette action est irréversible.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button style={{color: "#68B2A0"}} onClick={handleClose}>Annuler</Button>
          <Button variant="contained" style={{backgroundColor: "#68B2A0"}} onClick={handleClose} autoFocus>
            Supprimer
          </Button>
        </DialogActions>
      </Dialog>
    
  );
}
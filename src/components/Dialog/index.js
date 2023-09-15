import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Dialog as MuiDialog } from '@mui/material';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';

import Typography from '@mui/material/Typography';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import { Button } from 'components';

const CustomDialog = styled(MuiDialog)(({ theme }) => ({
   '& .MuiDialogContent-root': {
      padding: theme.spacing(3),
   },
   '& .MuiDialogActions-root': {
      padding: theme.spacing(3),
      justifyContent: 'center',
      gap: 3,
   },
}));

export function Dialog({ open, onCancel, onOk, cancelText, okText, descriptions }) {
   return (
      <div>
         <CustomDialog onClose={onCancel} aria-labelledby='customized-dialog-title' open={open}>
            <DialogContent>
               <Box
                  sx={{
                     display: 'flex',
                     justifyContent: 'center',
                     mb: '10px',
                  }}>
                  <ErrorOutlineRoundedIcon sx={{ fontSize: '70px', color: 'secondary.light' }} />
               </Box>
               <Box sx={{ p: '15px 40px 0px 40px' }}>
                  <Typography sx={{ width: '300px', textAlign: 'center' }} variant='body1'>
                     {descriptions || ' Are you sure you want to remove this course?'}
                  </Typography>
               </Box>
            </DialogContent>
            <DialogActions>
               <Button variant='outlined' onClick={onCancel}>
                  {cancelText || 'CANCEL'}
               </Button>
               <Button variant='contained' onClick={onOk}>
                  {okText || 'REMOVE'}
               </Button>
            </DialogActions>
         </CustomDialog>
      </div>
   );
}

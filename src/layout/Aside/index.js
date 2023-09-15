import { Box } from '@mui/material';
import React from 'react';

export const Aside = ({ children }) => {
   return (
      <Box width={'30%'} sx={{ position: 'sticky', top: 0, bgcolor: '#fff', maxHeight: '1190px' }}>
         {children}
      </Box>
   );
};

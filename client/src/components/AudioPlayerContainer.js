import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Paper from '@mui/material/Paper';
import AudioPlaya from './AudioPlaya';



const AudioPlayerContainer = () => {


    return (
      

        <Box>
            <Paper>
            <AudioPlaya/>
            <Typography variant="h6"></Typography>
            </Paper>
        </Box>
    );
  };
export default AudioPlayerContainer;
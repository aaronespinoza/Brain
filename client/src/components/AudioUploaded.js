import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { storage } from "../firebase";
// import {
//     ref,
//     uploadBytes,
//     getDownloadURL,
//     listAll,
//     list,
//   } from "firebase/storage";


// const imagesListRef = ref(storage, "images/");


const AudioUploaded = () => {


    return (
      

        <Box>
            <Paper elevation={0} >
            <Typography variant="h6" 
            sx={{
            padding:1
            }}>
                Audio Uploaded  3/22
            </Typography>
            {/* {imagesListRef.length} */}
            </Paper>
        </Box>
    );
  };
export default AudioUploaded;


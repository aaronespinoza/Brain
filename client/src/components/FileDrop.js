import React, { useState, useCallback, useEffect} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
// import { db, storage } from '../firebase';
//import {ref, uploadBytes, getDownloadURL} from "firebase/storage";
import {addDoc, collection, serverTimestamp, updateDoc, doc, arrayUnion} from "firebase/firestore"
import {
    ref,
    uploadBytes,
    getDownloadURL,
    listAll,
    list,
    firebase
  } from "firebase/storage";
  import { storage, db } from "../firebase";
  import {v4} from "uuid";

const FileDrop = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const [imageUrls, setImageUrls] = useState([]);

    const imagesListRef = ref(storage, "audio/");
    const start = Date.now();

    const handleUpload = (e) => {
        // console.log(e.dataTransfer.files[0])
        // setImageUpload(e.dataTransfer.files[0])
        console.log(serverTimestamp)
        if (e.dataTransfer.files[0] == null) return;
        const imageRef = ref(storage, `audio/${e.dataTransfer.files[0].name + serverTimestamp()}`);
        uploadBytes(imageRef, e.dataTransfer.files[0]).then((snapshot) => {
          getDownloadURL(snapshot.ref).then((url) => {
            setImageUrls((prev) => [...prev, url]);
          });
        });
      }

      
   

    return (
      

        <Box alignItems="center" mt={4} onDragOver={(e)=> {
            e.preventDefault();
        }}
        onDrop={(e) => {
            //uploadFile();
            //console.log(e.dataTransfer.files);
            console.log(e);
        }}
        onDrop={handleUpload}>
            <Paper elevation={0} sx={{
            height: 140
         }}  
       
            >
            
            <CloudUploadOutlinedIcon justifyContent="center" sx={{fontSize: 60, marginLeft:70}}/>
            <Typography textAlign="center" variant="h6" 
            // 
            >Drag and drop your MP3 audio file here</Typography>
           
            </Paper>
        </Box>
    );
  };
export default FileDrop;
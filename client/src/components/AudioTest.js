// import React, { useState, useRef, useEffect } from 'react'
// // import styles from "../styles/AudioPlayer.module.css";
// import SkipNextIcon from '@mui/icons-material/SkipNext';
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
// import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
// import IconButton from '@mui/material/IconButton';
// import Grid from '@mui/material/Grid';
// import Switch from '@mui/material/Switch';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import {
//     ref,
//     uploadBytes,
//     getDownloadURL,
//     listAll,
//     list,
//     firebase
//   } from "firebase/storage";

// import { app } from '../firebase';
// import './AudioPlaya.css';
// const db = app.firestore()



// const AudioPlaya = () => {

//   // state
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [duration, setDuration] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);


//   //queries
//   // references
//   const audioPlayer = useRef();   // reference our audio component
//   const progressBar = useRef();   // reference our progress bar
//   const animationRef = useRef();  // reference the animation

//     //test
//     const [imageUpload, setImageUpload] = useState(null);
//     const [imageUrls, setImageUrls] = useState([]);

//     const imagesListRef = ref(db, "images/");
//     // getDownloadURL(snapshot.ref).then((url) => {
//     //     setImageUrls((prev) => [...prev, url]);
//     //   });
//     useEffect(() => {
//         db.collection("todo").onSnapshot((snapshot)=> {
//             //console.log(snapshot.docs.map(doc=> doc.data()))
//             //setImageUpload(snapshot.docs.map(doc=> doc.data()));
//             snapshot.forEach(doc=> {

//             })
//         })
//     },[]);

  

//   return (
//     <div >
     
//       {/* {imageList.map((url)=>(
//           <div>((url))</div>
//       ))} */}
//     </div>
//   )
// }

// export default AudioPlaya;
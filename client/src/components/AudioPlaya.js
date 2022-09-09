import React, { useState, useRef, useEffect } from 'react'
// import styles from "../styles/AudioPlayer.module.css";
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayCircleRoundedIcon from '@mui/icons-material/PlayCircleRounded';
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import './AudioPlaya.css';
import { getDownloadURL, getStorage, ref } from '@firebase/storage';




const AudioPlaya = () => {
  // state
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);


  //queries
  // references
  const audioPlayer = useRef();   // reference our audio component
  const progressBar = useRef();   // reference our progress bar
  const animationRef = useRef();  // reference the animation

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying)
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  const whilePlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }

  const changePlayerCurrentTime = () => {
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
  }

  const backThirty = () => {
    progressBar.current.value = Number(progressBar.current.value - 30);
    changeRange();
  }

  const forwardThirty = () => {
    progressBar.current.value = Number(progressBar.current.value + 30);
    changeRange();
  }

  // useEffect(()=>{
  //   const func = async () => {
  //     const store = getStorage();
  //     const refered= ref(storage, "")
  //     await getDownloadURL(refered).then((x)=> {
  //       setUrl(x);
  //     })
  //   }
  //   func();
  // },[])

  return (
    <div className>
      <audio ref={audioPlayer}  src="https://firebasestorage.googleapis.com/v0/b/audiolight-269520.appspot.com/o/MrBeastMultilingual.mp4?alt=media&token=ee8a765e-ec1c-4674-a715-e97490f72e02" preload="metadata"></audio>
      <Grid container justifyContent="center" spacing={0} >
      <IconButton color="primary" className variant="contained" onClick={backThirty}  ><SkipPreviousIcon sx={{fontSize: 60}}/> </IconButton>
      <IconButton color="primary" onClick={togglePlayPause} variant="contained" size="large" className>
        {isPlaying ? <PauseCircleFilledRoundedIcon sx={{fontSize: 60}}/> : <PlayCircleRoundedIcon sx={{fontSize: 60}} />}
      </IconButton>
      <IconButton color="primary" className variant="contained" size="large" onClick={forwardThirty}> <SkipNextIcon sx={{fontSize: 60}}/></IconButton>
      </Grid>
      {/* current time */}
      <Grid container justifyContent="center">
        <Grid item xs={3} className="slider">
            <div >{calculateTime(currentTime)}</div>
        </Grid>
        <Grid item xs={6} >
        <div className="slider" >
        <input type="range" defaultValue="0" ref={progressBar} onChange={changeRange} />
        </div>
        </Grid>
        <Grid item xs={3} >
        <div className>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
        </Grid>
        <Grid container justifyContent="center" mt={3}>
        <FormControlLabel control={<Switch defaultChecked />} label="Play on Repeat" />
        </Grid>

      
      </Grid>
    </div>
  )
}

export default AudioPlaya;
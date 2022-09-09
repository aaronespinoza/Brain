import { Box } from '@mui/system';
import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import NavBar from './components/NavBar';
import Paginate from './components/Paginate';
import AudioPlayerContainer from './components/AudioPlayerContainer';
import ParagraphContainer from './components/ParagraphContainer';
import AudioUploaded from './components/AudioUploaded';
import Container from '@mui/material/Container';
// import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import FileDrop from './components/FileDrop';
import Typography  from '@mui/material/Typography';
import './App.css';
import FileTest from './components/FileTest';
import AudioTest from "./components/AudioTest";




function App() {

  // const [backendData, setBackendData] = useState([{}])
  // useEffect(() => {
  //   fetch("/api".then(
  //     response => response.json()
  //   ).then(
  //     data => {
  //       setBackendData(data)
  //     }
  //   ))
  // }, [])
  return (
  <>
      <ThemeProvider theme={theme}>
      <NavBar></NavBar>
      <div className="bodyWONav">
      <Container sx={{
        marginTop: 5,
        marginBottom:5
      }}>
        <Typography textAlign="center">S210: THE BABALAWO - SECRETS OF SANTERIA</Typography>
      </Container>

      <Grid container spacing={4} sx={{
            marginBottom:4
            }}>
        <Grid item xs={3}>
          <AudioUploaded/>
        </Grid>
        <Grid item xs={5}>

      <Paginate></Paginate>
        </Grid>
      </Grid>

      <Grid 
            container
            spacing={4} 
            alignItems="stretch"
            >
        <Grid item xs={4} justifyContent="center">
        <AudioPlayerContainer/>
        </Grid>
        <Grid item xs={8}>
        <ParagraphContainer/>
        </Grid>
        
      </Grid>
      <FileDrop/>
      {/* <AudioTest/> */}
      {/* <FileTest/> */}



      
      </div>
      </ThemeProvider>
    </>

  );
}

export default App;
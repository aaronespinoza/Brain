import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import ParagraphCounter from './ParagraphCounter';
import AudioCounter from './AudioCounter';
import Grid from '@mui/material/Grid';


const ParagraphContainer = () => {


    return (
      
       
        <Box padding={0}>
        <Paper >
        <Grid container justifyContent="center">
            <Grid item xs={3}>
                <ParagraphCounter ></ParagraphCounter>
            </Grid>
        </Grid>
        
        <Grid 
            container 
            >
        <Grid item xs={2} justifyContent="center">
        <AudioCounter/>
        </Grid>
        <Grid item xs={10}>
        <Typography variant="h6">La forma en que se ocultó, es que los esclavos cubanos fueron bautizados, ¿verdad? Les daban nombres cristianos. Se esperaba que cumplieran, de la boca para afuera, con la religión católica.
Por lo general esto consistía en ir a la iglesia una vez al año, y el resto del tiempo hacían lo que querían. Así que mientras no fueran demasiado obvios sobre lo que hacían y mientras no amenazaran de ninguna manera con alterar el sistema económico y social de Cuba, se les daba bastante libertad de actuación.
            </Typography>
        </Grid>
        
      </Grid>
        </Paper>
        </Box>
    );
  };
export default ParagraphContainer;
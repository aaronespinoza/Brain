import React from 'react';
import Pagination from '@mui/material/Pagination';
import Paper from '@mui/material/Paper';


const Paginate = () => {


    return (
      
      <Paper elevation={0} sx={{
        padding:.5,
        }}>
        <Pagination count={10} size="large" />
      </Paper>
    );
  };
export default Paginate;


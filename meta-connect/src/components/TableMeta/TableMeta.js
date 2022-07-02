import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';





export default function TableMeta() {
  return (
    <TableContainer component={Paper} sx={{margin:0,}}>
      <Table sx={{ width:"100%" , margin:0,}} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell sx={{textAlign:"center", fontSize:"20px",width:"50%"}}>Info</TableCell>
            <TableCell sx={{textAlign:"center", fontSize:"20px", width:"50%"}} align="right">Result</TableCell>
            
            
          </TableRow>
        </TableHead>
        <TableBody>
        
            <TableRow
              key="name"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" sx={{flexGrow:1}}>
                Conexion a Metamask
              </TableCell>
              <TableCell align="right" sx={{flexGrow:1}}> IN PROGRESS</TableCell>
   
            </TableRow>
      
        </TableBody>
      </Table>
    </TableContainer>
  );
}
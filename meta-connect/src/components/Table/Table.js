import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import css from './Table.module.css';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  /* '&:last-child td, &:last-child th': {
    border: 0,
  }, */
}));

const columns = [
  { id: 'name', label: 'Coin', minWidth: 100 },
  {
    id: 'current_price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'price_change_percentage_24h',
    label: 'Price Change(24hs)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'symbol',
    label: 'TAG',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toFixed(2),
  },
];




export default function TableCoin({coins}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  console.log(coins)

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>

    <Paper sx={{ width: '80%'}}>
      <TableContainer sx={{ width:"100%"}}>
        <Table stickyHeader aria-label="sticky table" sx={{ width:"100%"}}>
          <TableHead sx={{ width:"100%"}}>
            <StyledTableRow sx={{ width:"100%"}} >
              {columns.map((column) =>{
                
                  if(column.id === 'name'){
                    return(
                      <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{width:"157px", textAlign:"center"}}
                >
                  {column.label}
                </StyledTableCell>
                    )
                  }
                  if(column.id === 'current_price'){
                    return(
                      <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{width:"50%"}}
                >
                  {column.label}
                </StyledTableCell>
                    )
                  }
                  if(column.id === 'price_change_percentage_24h'){
                    return(
                      <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{minWidth:"185px"}}
                >
                  {column.label}
                </StyledTableCell>
                    )
                  }
                  if(column.id ==='symbol'){
                    return (
                <StyledTableCell
                  key={column.id}
                  align={column.align}
                  style={{width:"10%"}}
                >
                  {column.label}
                </StyledTableCell>
                    )
                  }
              
             
                
              })}
            </StyledTableRow>
          </TableHead>
          <TableBody sx={{ width:"100%"}}>
            {coins
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code} sx={{ width:"100%"}}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if(column.id === "name"){
                        return (
                            <StyledTableCell key={column.id} align={column.align} className={css.tablecell}>
                              <div style={{display:"flex",justifyContent:"start",textAlign:"center",lineHeight:"30px"}}>
                              <img src={row.image} alt=""  style={{width:"30px", height:"30px", marginRight:"7px"}}/>
                              <span>{value}</span>
                              </div>
                            </StyledTableCell>
                        )
                      }
                      if(column.id === 'current_price'){
                        return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {value + " USD"}
                        </StyledTableCell>
                        )
                      }
                      if(column.id === 'price_change_percentage_24h'){
                        return (
                        <StyledTableCell key={column.id} align={column.align}>
                          <span style={{color:value>1?"green":"red"}}>{value + "%"}</span>
                        </StyledTableCell>
                        )
                      }  

                      return (
                        <StyledTableCell key={column.id} align="left" style={{color:"grey"}}>
                          {"#"+value.toUpperCase()}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={coins?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </div>
  );
}
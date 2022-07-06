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
    fontSize: 14
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
    align: 'center',
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




export default function TableCoin({coins , search}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  const filtered_coins = coins.filter((coin)=>{
    return coin.name.toLowerCase().includes(search.toLowerCase()) || coin.symbol.toLowerCase().includes(search.toLowerCase())
  })
  

  return (
    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>

    <Paper sx={{ width: '95%'}}>
      <TableContainer sx={{ width:"100%", overflowX:"hidden"}}>
        <Table stickyHeader aria-label="sticky table" sx={{ width:"100%"}}>
          <TableHead sx={{ width:"100%"}}>
            <StyledTableRow sx={{ width:"100%", overflow:"hidden"}} >
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
                  style={{width:"40%"}}
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
                  sx={{width:"185px", display:{xs:"none", md:"table-cell", justifyContent:"center"}}}
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
                  sx={{width:"10%", display:{xs:"none", md:"table-cell", justifyContent:"center"}}}
                >
                  {column.label}
                </StyledTableCell>
                    )
                  }
              
             
                
              })}
            </StyledTableRow>
          </TableHead>
          <TableBody sx={{ width:"100%"}}>
            {filtered_coins
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.code} sx={{ width:"100%",overflow:"hidden"}}>
                    {columns.map((column) => {
                      const value = row[column.id];

                      if(column.id === "name"){
                        return (
                            <StyledTableCell key={column.id} align={column.align} className={css.tablecell}>
                              <div style={{display:"flex",justifyContent:"start",textAlign:"center",lineHeight:"30px"}}>
                              <img src={row.image} alt=""  style={{width:"30px", height:"30px", marginRight:"7px"}}/>
                              <span style={{width:"170px"}}>{value}</span>
                              </div>
                            </StyledTableCell>
                        )
                      }
                      if(column.id === 'current_price'){
                        return (
                        <StyledTableCell key={column.id} align={column.align}>
                          {value}
                        </StyledTableCell>
                        )
                      }
                      if(column.id === 'price_change_percentage_24h'){
                        return (
                        <StyledTableCell key={column.id} align={column.align} sx={{width:"185px", display:{xs:"none", md:"table-cell", justifyContent:"center"}}} >
                          <span style={{color:value>1?"green":"red"}}>{value + "%"}</span>
                        </StyledTableCell>
                        )
                      }  

                      return (
                        <StyledTableCell key={column.id} align="left" sx={{color:"grey", display:{xs:"none", md:"table-cell", justifyContent:"center"}}}>
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
        count={filtered_coins?.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        style={{width:"100%"}}
      />
    </Paper>
    </div>
  );
}
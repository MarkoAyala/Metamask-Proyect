import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar } from "@mui/material";
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import CheckIcon from '@mui/icons-material/Check';

export default function TableMeta({connButtonText , defaultAccount, userBalance}) {
  return (
    <TableContainer component={Paper} sx={{ margin:"0 20px 0 0",}}>
      <Table
        sx={{ width: "100%", margin: 0 }}
        size="small"
        aria-label="a dense table"
      >
        <TableHead>
          <TableRow>
            <TableCell
              sx={{ textAlign: "center", fontSize: "20px", width: "50%", height:"53px", alignItems:"center" }}
            >
              Info
            </TableCell>
            <TableCell
              sx={{ textAlign: "center", fontSize: "20px", width: "50%", height:"53px", alignItems:"center" }}
              align="right"
            >
              Result
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            key="name1"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ flexGrow: 1, height:"53px", alignItems:"center" }}>
              Conexion
            </TableCell>
            <TableCell align="right" sx={{ flexGrow: 1, display:"flex", justifyContent:"center", height:"53px", alignItems:"center", padding:{xs:"6px 0px 6px 0px", sm:"6px 16px 6px 16px"} }}>
                {
                    connButtonText === "Estas conectado!"? (
               <Avatar sx={{ bgcolor: "green" }} variant="rounded">
                <CheckIcon/>
              </Avatar>
                    ):(
              <Avatar sx={{ bgcolor: "#ff4848" }} variant="rounded">
                <DoNotDisturbAltIcon />
              </Avatar>
                    )
                }
           
              
            </TableCell>
          </TableRow>

          <TableRow
            key="name2"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ flexGrow: 1, height:"53px", alignItems:"center" }}>
              ID de Usuario
            </TableCell>
            <TableCell align="right" sx={{ flexGrow: 1, display:"flex", justifyContent:"center", height:"53px", alignItems:"center", fontSize:{xs:"11px",sm:"15px"}, padding:{xs:"6px 0px 6px 0px", sm:"6px 16px 6px 16px"}}}>
                {
                    defaultAccount?<span>{defaultAccount}</span>:(
              <Avatar sx={{ bgcolor: "#ff4848" }} variant="rounded">
                <DoNotDisturbAltIcon />
              </Avatar>
                    )
                }
            </TableCell>
          </TableRow>
          <TableRow
            key="name3"
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
          >
            <TableCell component="th" scope="row" sx={{ flexGrow: 1, height:"53px", alignItems:"center" }}>
              Saldo
            </TableCell>
            <TableCell align="right" sx={{ flexGrow: 1, display:"flex", justifyContent:"center", height:"53px", alignItems:"center", padding:{xs:"6px 0px 6px 0px", sm:"6px 16px 6px 16px"} }}>
                {
                    userBalance?<span>{userBalance}</span>:(
              <Avatar sx={{ bgcolor: "#ff4848" }} variant="rounded">
                <DoNotDisturbAltIcon />
              </Avatar>
                    )
                }
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

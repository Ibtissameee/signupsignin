import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Divider, Stack, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import DeleteDialog from './DeleteDialog';

const columns = [
  { id: 'activités', label: 'Activités', minWidth: 170 },
 
  
];
const rows = [
  {id: 0, activity: 'Ouvrage pédagogique et/ou didactique(ISBN ou Maison d\'édition)'},
  {id: 1, activity: 'Polycopiés pédagogiques'},
  {id: 2, activity: 'Petits livres de méthodologie ou de didactique pour la lecture ou l\'analyse Activer'},
  {id: 3, activity: 'Mémoire de PFE Licence ou un diplôme équivalent'},
  {id: 4, activity: 'Mémoire de PFE DUT ou un diplôme équivalent'},
  {id: 5, activity: 'Formation de formateurs'},
];

export default function ListActivities() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
 
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{padding: "20px"}} style={{color: "#2C6975"}}>
            Liste des activités
        </Typography>
        <Divider/>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <strong style={{color: "#2C6975"}}>{column.label}</strong>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} >
                        <TableCell key={row.id} align="left">
                          {row.activity}
                        </TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <EditIcon 
                               style={{
                                fontSize: "20px",
                                color: "#2C6975",
                                cursor: "pointer",
                               }}
                               className="cursor-pointer"/>
                            <DeleteIcon
                            style={{
                              fontSize: "20px",
                              color: "darkred",
                              cursor: "pointer",
                            }}
                              onClick={
                                handleClickOpen
                            }
                            />
                            
                          </Stack>
                        </TableCell>
                    
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
       <DeleteDialog open={openDialog} handleClose={handleClose}/>     
    </Paper>
  );
}
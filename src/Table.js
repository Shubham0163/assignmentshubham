// Table.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import { deleteRow } from './store/action';

const TableComponent = ({ handleEdit }) => {
  const rows = useSelector(state => state.rows);
  console.log("table",rows)
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    dispatch(deleteRow(index));
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Contact</TableCell>
            <TableCell>Weekday</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Date of Birth</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.contact}</TableCell>
              <TableCell>{row.weekday ? 'Yes' : 'No'}</TableCell>
              <TableCell>{row.gender}</TableCell>
              <TableCell>{row.dob}</TableCell>
              <TableCell>
                <Button onClick={() => handleEdit(row, index)}>Edit</Button> {/* Handle edit button click */}
                <Button onClick={() => handleDelete(index)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;

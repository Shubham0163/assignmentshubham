import React, { useState } from 'react';
import { Modal, TextField, Button } from '@mui/material';

const EditModal = ({ open, handleClose, rowData, handleEdit }) => {
  const [editedData, setEditedData] = useState(rowData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    handleEdit(editedData);
    handleClose();
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <div style={{width:"100%"}}>
        <TextField name="name" value={editedData.name} onChange={handleChange} label="Name" />
        <TextField name="email" value={editedData.email} onChange={handleChange} label="Email" />
        <TextField name="contact" value={editedData.contact} onChange={handleChange} label="Contact" />
        <TextField name="weekday" value={editedData.weekday} onChange={handleChange} label="Weekday" />
        <TextField name="gender" value={editedData.gender} onChange={handleChange} label="Gender" />
        <TextField name="dob" value={editedData.dob} onChange={handleChange} label="Date of Birth" />
        <Button onClick={handleSubmit} style={{background:"black",margin:"auto"}}>Submit</Button>
      </div>
    </Modal>
  );
};

export default EditModal;

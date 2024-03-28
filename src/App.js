import React from 'react';
import Form from './Form';
import Table from './Table';
import EditModal from './editModal';
import { useDispatch } from 'react-redux';
import { editRow } from './store/action';
import "./App.css"

function App() {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = React.useState(false);
  const [rowData, setRowData] = React.useState(null);

  const handleEdit = (data) => {
    dispatch(editRow(rowData.index, data));
  };

  const handleModalOpen = (row, index) => {
    setRowData({ ...row, index });
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Form</h1>
      <Form onSubmit={(data) => console.log(data)} />
      <h1>Table</h1>
      <Table handleEdit={handleModalOpen} />
      {rowData && (
        <EditModal
          open={modalOpen}
          handleClose={handleModalClose}
          rowData={rowData}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
}

export default App;

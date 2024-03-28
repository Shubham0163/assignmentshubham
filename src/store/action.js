export const deleteRow = (index) => ({
    type: 'DELETE_ROW',
    payload: index
  });
  
  export const editRow = (index, data) => ({
    type: 'EDIT_ROW',
    payload: { index, data }
  });


export const addRow = (data) => ({
    type: 'ADD_ROW',
    payload: data
  });
  
  
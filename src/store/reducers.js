const initialState = {
    rows: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'DELETE_ROW':
        return {
          ...state,
          rows: state.rows.filter((row, index) => index !== action.payload)
        };
      case 'EDIT_ROW':
        return {
          ...state,
          rows: state.rows.map((row, index) => index === action.payload.index ? action.payload.data : row)
        };
        case 'ADD_ROW':
            return {
              ...state,
              rows: [...state.rows, action.payload]
            };
      default:
        return state;
    }
  };
  
  export default reducer;
  
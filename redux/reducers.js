const initialState = {
  document: null,
  error: null,
};

const documentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DOCUMENT_SUCCESS":
      return { ...state, document: action.payload, error: null };
    case "FETCH_DOCUMENT_ERROR":
      return { ...state, document: null, error: action.payload };

    default:
      return state;
  }
};

export default documentReducer;

export const getUserId = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:4000/user/${id}`);
    const data = await response.json();

    dispatch({
      type: "FETCH_DOCUMENT_SUCCESS",
      payload: data,
    });
  } catch (err) {
    dispatch({
      type: "FETCH_DOCUMENT_ERROR",
      payload: err.message,
    });
  }
};

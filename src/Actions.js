export const AddProduct = (value) => async (dispatch) =>
  dispatch({
    type: "ADD",
    payload: value,
  });

export const RemoveProduct = (value) => {
  return async function (dispatch) {
    dispatch({
      type: "REMOVE",
      payload: { name: value },
    });
  };
};

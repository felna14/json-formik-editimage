import { deleteData, editData, getData, postData } from '../service';

export const getUserData = () => async (dispatch) => {
  const { data } = await getData('User');
  dispatch({
    type: 'GET_USER',
    payload: data,
  });
};

export const postUserData = (data) => async (dispatch) => {
  await postData('User', data);
  dispatch(getUserData());
};

export const editUserData = (id) => async (dispatch) => {
  const { data } = await getData(`User/${id}`);
  dispatch({
    type: 'EDIT_USER',
    payload: data,
  });
};

export const edittedUserData = (data, id) => async (dispatch) => {
  await editData(`User/${id}`, data);
  dispatch(getUserData());
};

export const viewUserData = (id) => async (dispatch) => {
  const { data } = await getData(`User/${id}`);
  dispatch({
    type: 'VIEW_USER',
    payload: data,
  });
};

export const deleteUserData = (id) => async (dispatch) => {
  await deleteData(`User/${id}`);
  dispatch(getUserData());
};



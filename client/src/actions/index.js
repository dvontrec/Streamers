import streams from '../apis/streams';
import history from '../history';

// Create Sign in action
export const signIn = userId => {
  return {
    type: 'SIGN_IN',
    payload: userId
  };
};

export const signOut = () => {
  return {
    type: 'SIGN_OUT'
  };
};

export const createStream = formValues => async (dispatch, getState) => {
  // Gets the user ID from the state
  const { userId } = getState().auth;
  // calls the streams api and posts the form data saving the response with the new user Id
  const response = await streams.post('/streams', { ...formValues, userId });
  //  dispatches an action with the response as the payload
  dispatch({ type: 'CREATE_STREAM', payload: response.data });
  //  Do programmatic navigation to get user back to root route
  history.push('/');
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({ type: 'FETCH_STREAMS', payload: response.data });
};
export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: 'FETCH_STREAM', payload: response.data });
};
export const editStream = (id, formValues) => async dispatch => {
  // patch instead of put to update SOME values
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: 'EDIT_STREAM', payload: response.data });
  history.push('/');
};
export const deleteStream = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: 'DELETE_STREAM', payload: id });
  history.push('/');
};

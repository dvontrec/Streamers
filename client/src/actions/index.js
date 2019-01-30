import streams from '../apis/streams';

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

export const createStream = formValues => async dispatch => {
  // calls the streams api and posts the form data saving the response
  const response = await streams.post('/streams', formValues);
  //  dispatches an action with the response as the payload
  dispatch({ type: 'CREATE_STREAM', payload: response.data });
};

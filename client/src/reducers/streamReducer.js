import _ from 'lodash';

export default (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_STREAMS':
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case 'FETCH_STREAM':
      // Returns the state and the stream with a key of the id
      return { ...state, [action.payload.id]: action.payload };
    case 'CREATE_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'EDIT_STREAM':
      return { ...state, [action.payload.id]: action.payload };
    case 'DELETE_STREAM':
      // returns a new object that is the old state with the stream of specific id removed
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

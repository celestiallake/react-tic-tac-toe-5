import types from './types.d';

const { CHANGE_FIELD_SIZE } = types;

export default {
  type: CHANGE_FIELD_SIZE,
  payload: {
    height: 5,
    width: 5,
  },
};

import types from './types.d';

const { READ_INPUT } = types;

export default {
  type: READ_INPUT,
  payload: {
    handle: String(),
    value: String(),
  },
};

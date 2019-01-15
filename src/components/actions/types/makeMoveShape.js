import types from './types.d';

const { MAKE_MOVE } = types;

export default {
  type: MAKE_MOVE,
  payload: {
    row: Number(),
    column: Number(),
  },
};

import types from './types.d';

const { TOGGLE_SWITCH } = types;

export default {
  type: TOGGLE_SWITCH,
  payload: {
    handle: String(),
  },
};

import React from 'react';
import { connect } from 'react-redux';
import toggleSwitchShape from '../actions/types/toggleSwitchShape';

const mapStateToProps = ({ switches }, { handle }) => {
  const value = Object.keys(switches).includes(handle) ? switches[handle] : false;
  console.log(value);
  return {
    value,
  };
};

const mapDispatchToProps = (dispatch, { handle }) => ({
  onClick: () => dispatch({
    ...toggleSwitchShape,
    payload: { handle },
  }),
});

const SwitchWrap = Component => connect(mapStateToProps, mapDispatchToProps)(
  ({ handle, onClick, value }) => (
    <Component handle={handle} onClick={onClick} pressed={value} />
  ),
);

export default SwitchWrap;

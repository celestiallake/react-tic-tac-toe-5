import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import colors from '../../constants/colors';
import toggleSwitchShape from '../actions/types/toggleSwitchShape';

const {
  bool,
  func,
  string,
} = PropTypes;


const Switch = styled.div`
  height: 50px;
  width: 50px;
  position: fixed;
  left: 15px;
  top: 15px;
  border: solid 2px #ddd;
  border-radius: 50%;
  background: ${({ pressed }) => (pressed ? colors.ACCENT_1.DEFAULT : colors.ACCENT_2.DEFAULT)};
  transition: .2s;
  &:hover { transform: scale(1.02); }
  &:active { transform: scale(1.1); transition: .1s; }
  &::before, &::after {
    transition: .5s;
    content: '';
    position: absolute;
    background: #fff;
    width: 6px;
    border-radius: 3px;
    left: ${({ pressed }) => (pressed ? 22 : 24)}px;
    ${({ pressed }) => (
    pressed
      ? 'height: 40px;'
      : 'height: 25px;'
  )}
  }
  &::before {
    transform: rotate(45deg);
    top: ${({ pressed }) => (pressed ? 5 : 20)}px;
  }
  &::after {
    transform: rotate(-45deg);
    top: 5px;
  }
`;

Switch.propTypes = { pressed: bool };
Switch.defaultProps = { pressed: false };

const SwitchWrap = ({
  handle,
  onClick,
  value,
}) => (
  <a type="button" onClick={onClick} key={handle}>
    <Switch pressed={value} />
  </a>
);
SwitchWrap.propTypes = {
  handle: string.isRequired,
  onClick: func,
  value: bool,
};
SwitchWrap.defaultProps = {
  onClick: () => 0,
  value: false,
};

const mapStateToProps = ({ switches }, { handle }) => {
  const value = Object.keys(switches).includes(handle) ? switches[handle] : false;
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

export default connect(mapStateToProps, mapDispatchToProps)(SwitchWrap);

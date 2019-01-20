import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../constants/colors';
import SwitchWrap from '../containers/SwitchWrap';
import PanelFrame from '../containers/PanelFrame';

const {
  arrayOf,
  element,
  oneOfType,
} = PropTypes;

const MenuSwitch = SwitchWrap(styled.div`
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
    width: 10px;
    border-radius: 3px;
    left: ${({ pressed }) => (pressed ? 20 : 22)}px;
    ${({ pressed }) => (
    pressed
      ? 'height: 36px;'
      : 'height: 25px;'
  )}
  }
  &::before {
    transform: rotate(45deg);
    top: ${({ pressed }) => (pressed ? 7 : 18)}px;
  }
  &::after {
    transform: rotate(-45deg);
    top: 7px;
  }
`);

const ControlPanel = ({ children }) => (
  <PanelFrame handle="sideMenu">
    <MenuSwitch handle="sideMenu" />
    {children}
  </PanelFrame>
);

ControlPanel.propTypes = {
  children: oneOfType([
    element,
    arrayOf(element),
  ]),
};
ControlPanel.defaultProps = { children: [] };

export default ControlPanel;

import React from 'react';
import PropTypes from 'prop-types';
import SwitchWrap from '../containers/SwitchWrap';
import PanelFrame from '../containers/PanelFrame';
// import types from '../actions/types/types.d';

const {
  arrayOf,
  element,
  oneOfType,
} = PropTypes;

const ControlPanel = ({ children }) => (
  <PanelFrame handle="sideMenu">
    <SwitchWrap handle="sideMenu" />
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

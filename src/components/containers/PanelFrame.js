import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import colors from '../../constants/colors';

const { bool } = PropTypes;

const PanelFrame = styled.div`
  height: 100vh;
  width: 300px;
  top: 0;
  left: ${({ open }) => (open ? 0 : -300)}px;
  position: absolute;
  box-sizing: border-box;
  border-right: solid 2px #ddd;
  background: ${colors.BACKGROUND.DEFAULT};
  transition: .4s;
  padding-top: 100px;
  text-align: center;
  &::before {
    content: '';
    position: absolute;
    top: 88px;
    height: 2px;
    border-radius: 1px;
    width: 260px;
    left: 19px;
    display: block;
    background: ${colors.BORDER.LIGHT}
  }
`;

PanelFrame.propTypes = { open: bool };
PanelFrame.defaultProps = { open: false };

const mapStateToProps = ({ switches }, { handle }) => ({
  open: Object.keys(switches).includes(handle) ? switches[handle] : false,
});

export default connect(mapStateToProps)(PanelFrame);

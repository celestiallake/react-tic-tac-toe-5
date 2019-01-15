// import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import resetFieldShape from '../actions/types/resetFieldShape';
import colors from '../../constants/colors';

const winningStateBG = [
  colors.BACKGROUND.DEFAULT,
  colors.ACCENT_1.DEFAULT,
  colors.ACCENT_2.DEFAULT,
  colors.ACCENT_3.DEFAULT,
];

const winningStateBorder = [
  colors.BORDER.DEFAULT,
  colors.ACCENT_1.LIGHT,
  colors.ACCENT_2.LIGHT,
  colors.ACCENT_3.LIGHT,
];

const stateDescriptions = [
  'IN PROGRESS',
  'PLAYER 1 WINS!',
  'PLAYER 2 WINS!',
  'DRAW!',
];

const WinningStatePopup = styled.div`
  background: ${({ winningState }) => winningStateBG[winningState]};
  border: solid 2px ${({ winningState }) => winningStateBorder[winningState]};
  font-family: 'Days One', icons;
  font-size: 32px;
  height: 60px;
  display: inline-block;
  margin-left: -182px;
  width: 360px;
  border-radius: 32px;
  cursor: pointer;
  line-height: 60px;
  position: absolute;
  bottom: 40px;
  left: 50vw;
  text-align: center;
  transition: .2s;
  overflow: hidden;
  transform:
    translateY(${({ winningState }) => (!winningState ? 90 : 0)}px)
    scale(${({ winningState }) => (!winningState ? 0 : 1)});
  &::before {
    content: '\u27F3 RESET';
    display: block;
    margin-top: -60px;
    transition: .3s;
  }
  &:hover {
    opacity: .8;
    &::before {
      margin-top: 0;
    }
  }
  &:active {
    transform: scale(1.1);
    transition: .1s;
  }
  color: ${({ winningState }) => (!winningState ? colors.BORDER.DARK : '#fff')};
`;

const mapStateToProps = ({ gameState: { winningState } }) => ({
  winningState,
  children: stateDescriptions[winningState],
});

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(resetFieldShape),
});

export default connect(mapStateToProps, mapDispatchToProps)(WinningStatePopup);

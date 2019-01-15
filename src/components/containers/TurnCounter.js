import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import colors from '../../constants/colors';

const gameStateBg = [
  colors.BACKGROUND.LIGHT,
  colors.ACCENT_1.DEFAULT,
  colors.ACCENT_2.DEFAULT,
];

const gameStateFg = [
  colors.BORDER.DARK,
  colors.BACKGROUND.LIGHT,
];

const Counter = styled.div`
  display: inline-block;
  top: 20px;
  right: 20px;
  position: absolute;
  height: 54px;
  min-width: 54px;
  padding: 0 15px;
  cursor: default;
  transition: .4s;
  font-family: 'Days One';
  font-size: 35px;
  line-height: 54px;
  text-align: center;
  box-sizing: border-box;
  border-radius: 27px;
  color: ${({ winningState }) => gameStateFg[Number(!winningState)]};
  background: ${({ winningState, currentPlayer }) => (
    !winningState ? gameStateBg[currentPlayer] : gameStateBg[0]
  )};
`;

const mapStateToProps = ({ gameState: { currentPlayer, winningState, turnCount } }) => ({
  turnCount,
  currentPlayer,
  winningState,
});

export default connect(mapStateToProps)(({ currentPlayer, winningState, turnCount }) => (
  <Counter
    currentPlayer={currentPlayer}
    winningState={winningState}
  >
    { !winningState ? turnCount + 1 : turnCount }
  </Counter>
));

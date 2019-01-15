import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../constants/colors';

const { number } = PropTypes;

const gameStateBackgrounds = [
  colors.BACKGROUND.LIGHT,
  colors.ACCENT_1.DEFAULT,
  colors.ACCENT_2.DEFAULT,
];
const gameStateBorders = [
  colors.BORDER.DEFAULT,
  colors.ACCENT_1.LIGHT,
  colors.ACCENT_2.LIGHT,
];

const Cell = styled.div`
  height: 50px;
  background: ${({ tick }) => gameStateBackgrounds[tick]};
  width: 50px;
  border: solid 2px #ccc;
  ${({ tick }) => (tick ? `border-color: ${gameStateBorders[tick]} !important;` : '')}
  border-radius: 3px;
  margin: 3px;
  float: left;
  transition: .2s;
  cursor: pointer;
  &:active {
    transform: scale(1.1) !important;
    transition: .1s;
  }
  &:hover {
    transform: scale(1.03);
    border-color: ${({ currentPlayer }) => gameStateBorders[currentPlayer]};
  }
`;

Cell.propTypes = {
  tick: number,
  currentPlayer: number.isRequired,
  row: number.isRequired,
  column: number.isRequired,
};
Cell.defaultProps = { tick: 0 };

export default Cell;

import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Cell from '../containers/Cell';
import colors from '../../constants/colors';
import { X, O } from './Figures';

const { arrayOf, number, shape } = PropTypes;
const gameStateBorders = [
  colors.BORDER.DARK,
  colors.ACCENT_1.DEFAULT,
  colors.ACCENT_2.DEFAULT,
  colors.ACCENT_3.LIGHT,
];

const FieldContainer = styled.div`
  background: #eee;
  border: solid 2px;
  border-radius: 6px;
  padding: 6px;
  display: inline-block;
  overflow: hidden;
  margin: 20px auto;
  transform: scale(0.99);
  transition: .2s;
  border-color: ${({ winningState }) => gameStateBorders[winningState]};
`;

const Field = ({ cellMatrix, gameState: { winningState } }) => (
  <FieldContainer winningState={winningState}>
    {
      cellMatrix.map((row, rowIndex) => (
        <div style={{ overflow: 'hidden' }} key={`r${rowIndex.toString()}`}>
          {
            row.map((tickValue, cellIndex) => (
              <Cell
                tick={tickValue}
                row={rowIndex}
                column={cellIndex}
                key={`c${rowIndex.toString()}/${cellIndex.toString()}`}
              >
                { ['', <X />, <O />][tickValue] }
              </Cell>
            ))
          }
        </div>
      ))
    }
  </FieldContainer>
);

Field.propTypes = {
  cellMatrix: arrayOf(arrayOf(number)),
  gameState: shape({
    winningState: number,
  }),
};
Field.defaultProps = {
  cellMatrix: Array(5).fill(Array(5).fill(0)),
  gameState: 0,
};

export default Field;

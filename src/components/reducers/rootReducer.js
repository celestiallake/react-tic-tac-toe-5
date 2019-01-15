import types from '../actions/types/types.d';
import players from '../shared/types/players';

const {
  CHANGE_FIELD_SIZE,
  MAKE_MOVE,
  TOGGLE_SWITCH,
  RESET_FIELD,
} = types;
const { None, X, Draw } = players;

const getDimensions = field => [field.length, field[0].length];
const initializeField = (rows, columns) => Array(rows).fill(0).map(() => Array(columns).fill(0));
const isNullable = x => (!(x < 0) && !(x > 0) && !(x === 0));

const initialState = {
  field: initializeField(12, 12),
  switches: Object(),
  gameState: {
    currentPlayer: X,
    turnCount: 0,
    winningState: None,
  },
};

const getBoundary = (field, [startRow, startColumn], [rowOffset, colOffset]) => {
  // Generic way to determine the boundaries of a lookup row
  let boundary;
  let newBnd;
  for (let i = 0; i < 5; i += 1) {
    newBnd = [startRow + rowOffset * i, startColumn + colOffset * i];
    if (field[newBnd[0]] === undefined || field[newBnd[0]][newBnd[1]] === undefined) { break; }
    boundary = newBnd;
  }
  return boundary;
};

const extractLookupRowByRule = (field, [startRow, startColumn], [rowOffset, colOffset]) => {
  const negBound = getBoundary(field, [startRow, startColumn], [rowOffset, colOffset].map(v => -v));
  const posBound = getBoundary(field, [startRow, startColumn], [rowOffset, colOffset]);
  const delta = Math.max(posBound[0] - negBound[0], posBound[1] - negBound[1]) + 1;
  const lookupRow = Array(delta).fill(0);
  for (let i = 0; i < delta; i += 1) {
    lookupRow[i] = field[negBound[0] + i * rowOffset][negBound[1] + i * colOffset];
  }
  return lookupRow;
};

const checkCombination = (lookupRow, currentPlayer) => {
  let combinationLength = 0;
  for (let i = 0; i < lookupRow.length; i += 1) {
    if (lookupRow[i] === currentPlayer) { combinationLength += 1; } else { combinationLength = 0; }
    if (combinationLength === 5) {
      return true;
    }
  }
  return false;
};

const checkWin = (field, currentPlayer, lastRow, lastColumn) => {
  // Probably the only sane way to check the winning condition in optimized constant time
  const lookupRow = extractLookupRowByRule(field, [lastRow, lastColumn], [0, 1]);
  const lookupCol = extractLookupRowByRule(field, [lastRow, lastColumn], [1, 0]);
  const lookupDiagLR = extractLookupRowByRule(field, [lastRow, lastColumn], [1, 1]);
  const lookupDiagRL = extractLookupRowByRule(field, [lastRow, lastColumn], [1, -1]);
  return [lookupRow, lookupCol, lookupDiagLR, lookupDiagRL]
    .map(v => checkCombination(v, currentPlayer))
    .includes(true)
    ? currentPlayer
    : None;
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
  case RESET_FIELD: {
    const { field } = state;
    const dimensions = getDimensions(field);
    const newField = initializeField(...dimensions);
    return {
      ...initialState,
      field: newField,
    };
  }
  case CHANGE_FIELD_SIZE: {
    const { height, width } = payload;
    const [vHeight, vWidth] = [height, width].map(
      x => (v => (v > 5 && v < 20 ? v : 10))(
        isNullable(parseInt(x, 10)) ? 0 : parseInt(x, 10),
      ),
    );
    return { ...initialState, field: initializeField(vHeight, vWidth) };
  }
  case MAKE_MOVE: {
    const { row, column } = payload;
    const {
      field,
      gameState,
      gameState: {
        currentPlayer,
        turnCount,
        winningState,
      },
    } = state;
    if (winningState !== None) { return state; }
    const nextPlayer = currentPlayer ^ 3;
    field[row][column] = currentPlayer;
    const newTurnCount = turnCount + 1;
    let newWinningState = winningState;
    console.log(newTurnCount);
    if (newTurnCount >= 9) {
      newWinningState = checkWin(field, currentPlayer, row, column);
    }
    if (newTurnCount === field.length * field[0].length && newWinningState === None) {
      newWinningState = Draw;
    }
    return {
      ...state,
      field,
      gameState: {
        ...gameState,
        currentPlayer: nextPlayer,
        turnCount: newTurnCount,
        winningState: newWinningState,
      },
    };
  }
  case TOGGLE_SWITCH: {
    const { handle } = payload;
    const { switches } = state;
    const oldValue = switches[handle];
    const newValue = !oldValue;
    const statePatch = {};
    console.log(switches);
    statePatch[handle] = newValue;
    console.log(handle, statePatch);
    return { ...state, switches: { ...switches, ...statePatch } };
  }
  default: {
    return state;
  }
  }
};

export default rootReducer;

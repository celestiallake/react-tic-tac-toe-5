import { connect } from 'react-redux';
import makeMoveShape from '../actions/types/makeMoveShape';
import Cell from '../repr/Cell';

const mapStateToProps = ({ gameState: { currentPlayer } }) => ({ currentPlayer });
const mapDispatchToProps = (dispatch, { tick, row, column }) => ({
  onClick: () => {
    if (!tick) {
      return dispatch({
        ...makeMoveShape,
        payload: { row, column },
      });
    }
    return null;
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cell);

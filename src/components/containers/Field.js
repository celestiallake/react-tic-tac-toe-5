import { connect } from 'react-redux';
import makeMoveShape from '../actions/types/makeMoveShape';
import Field from '../repr/Field';

const mapStateToProps = ({ field, gameState }) => ({
  cellMatrix: field,
  gameState,
});

const mapDispatchToProps = dispatch => ({
  cellOnClickEncloser: (row, column) => () => dispatch({
    ...makeMoveShape,
    payload: { row, column },
  }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Field);

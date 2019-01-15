import React from 'react';
import { connect } from 'react-redux';
import Button from '../repr/Button';
import resetFieldShape from '../actions/types/resetFieldShape';
import colors from '../../constants/colors';

const mapStateToProps = () => ({});
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(resetFieldShape),
});

export default connect(mapStateToProps, mapDispatchToProps)(({ onClick }) => (
  <Button
    onClick={onClick}
    bg={colors.ACCENT_3.DEFAULT}
    bgHover={colors.ACCENT_3.LIGHT}
    fg={colors.BACKGROUND.LIGHT}
  >
    RESTART
  </Button>
));

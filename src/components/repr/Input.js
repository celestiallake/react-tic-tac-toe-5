import styled from 'styled-components';
import PropTypes from 'prop-types';

const InputField = styled.input`

`;

const {
  func,
  string,
} = PropTypes;

const InputLabel = styled.label`

`;

const Input = ({
  handle,
  label,
  onBlur,
  value
}) => (
  <p>
    { label.length && <InputLabel>{label}</InputLabel> }
    <InputField id={handle} value={value}/>
  </p>
);
Input.propTypes = {
  handle: string.isRequired,
  label: string,
  onBlur: func.isRequired,
  value: string,
};
Input.defaultProps = {
  label: '',
  value: '',
};


export default Input;

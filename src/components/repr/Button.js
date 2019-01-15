import styled from 'styled-components';

const CenteredButton = styled.div`
  height: 50px;
  line-height: 50px;
  width: 260px;
  font-size: 25px;
  margin: 10px auto;
  font-family: 'Days One';
  color: ${({ fg }) => fg};
  border-radius: 6px;
  cursor: pointer;
  background: ${({ bg }) => bg};
  transition: .2s;
  &:active {
    transform: scale(1.05) !important;
    transition: .1s;
  }
  &:hover {
    transform: scale(1.02);
    background: ${({ bg, bgHover }) => (bgHover || bg)};
  }
`;

export default CenteredButton;

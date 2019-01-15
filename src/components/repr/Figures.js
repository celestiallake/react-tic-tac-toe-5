import styled from 'styled-components';

const X = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  animation: zoomIn .3s ease-out;
  &::before, &::after {
    position: absolute;
    top: 3px;
    left: 20px;
    content: '';
    display: inline-block;
    height: 44px;
    width: 10px;
    border-radius: 3px;
    background: #fff;
  }
  &::before { transform: rotate(45deg) }
  &::after { transform: rotate(-45deg) }
`;

const O = styled.div`
  position: relative;
  height: 50px;
  width: 50px;
  animation: zoomIn .3s;
  &::before {
    content: '';
    position: absolute;
    display: inline-block;
    top: 4px;
    left 4px;
    height: 24px;
    width: 24px;
    border: solid 9px #fff;
    border-radius: 50%;
  }
`;

export { X, O };
export default X;

import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import rootReducer from '../reducers/rootReducer';

const { arrayOf, element, oneOfType } = PropTypes;
const store = createStore(rootReducer);

const Frame = styled.div`
  height: 100vh;
  width: 100vw;
  position: absolute;
  left: 0; top: 0;
  overflow: hidden;
`;

const Layout = ({ children }) => (
  <Provider store={store}>
    <Frame>
      {children}
    </Frame>
  </Provider>
);
Layout.propTypes = {
  children: oneOfType([
    element,
    arrayOf(element),
  ]),
};
Layout.defaultProps = { children: [] };

export default Layout;

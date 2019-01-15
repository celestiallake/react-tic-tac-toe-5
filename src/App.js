import React from 'react';
// import PropTypes from 'prop-types';
import Layout from './components/repr/Layout';
import Field from './components/containers/Field';
import ControlPanel from './components/repr/ControlPanel';
import WinningStatePopup from './components/containers/WinningStatePopup';
import ResetButton from './components/containers/ResetButton';
import TurnCounter from './components/containers/TurnCounter';
import './App.css';

const App = () => (
  <div className="App">
    <Layout>
      <Field />
      <ControlPanel>
        <ResetButton />
      </ControlPanel>
      <WinningStatePopup />
      <TurnCounter />
    </Layout>
  </div>
);

export default App;

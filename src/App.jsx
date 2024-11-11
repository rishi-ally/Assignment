// src/App.jsx
import React from 'react';
import LeftPanel from './LeftPanel';
import MainViewer from './MainViewer';
import HubView from './HubView';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <LeftPanel />
      <div className="viewer-container">
        <HubView />
        <MainViewer />
      </div>
    </div>
  );
}

export default App;

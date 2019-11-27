import React from 'react';
import './app.css';
import Form from '../Form/Form';

const App: React.FC = () => {
  return (
    <div className="main-container" style={{marginTop: '100px'}}>
      <div className="container">
        <div className="custom-content">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;

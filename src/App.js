import React from 'react';
import './component/App.css';
import LoginPage from './component/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="login d-flex justify-content-center">
      <div className="container">
        <div className="card">
          <div className="card-body">
            <LoginPage />
          </div>
        </div>
      </div>
    </div>
   
  );
}

export default App;

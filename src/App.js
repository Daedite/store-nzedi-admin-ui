import React from 'react';
import './component/App.css';
import LoginPage from './component/user/login/login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="login d-flex justify-content-center ">
      <div className="container" style={{paddingTop:"130px"}}>
        <div style={{width:"450px"}} className="card m-auto">
            <div className="card-header text-center">
                <h3>Login</h3>
            </div>
          <div  className="card-body">
            <LoginPage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

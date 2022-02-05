import React, { Component, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useHistory } from 'react-router-dom';
import { headerlogo } from '../Entryfile/imagepath.jsx';
import httpService from '../lib/httpService.js';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { setAuthticationStore } from '../features/authentication/authenticationSlice.js';
import { Login } from '../lib/api/index.js';

const Loginpage = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLoginWithEmailAndPassword = async () => {
    const res = await Login(username, password);
    console.log(res);
    if (res.error) {
      toast.error(res.message);
    } else {
      localStorage.setItem('auth', JSON.stringify(res));
      dispatch(setAuthticationStore(res));
      history.push('/app/dashboard');
    }
  };
  return (
    <>
      <Helmet>
        <title>Login</title>
        <meta name="description" content="Login page" />
      </Helmet>
      <div className="account-content">
        <Link to="/applyjob/joblist" className="btn btn-primary apply-btn">
          Apply Job
        </Link>
        <div className="container">
          {/* Account Logo */}
          <div className="account-logo">
            <Link to="/app/main/dashboard">
              <img src={headerlogo} alt="Oboroi Real Estates" />
            </Link>
          </div>
          {/* /Account Logo */}
          <div className="account-box">
            <div className="account-wrapper">
              <h3 className="account-title">Login</h3>
              <p className="account-subtitle">Access to dashboard</p>
              {/* Account Form */}
              <div>
                <div className="form-group">
                  <label>Username</label>
                  <input
                    className="form-control"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <div className="row">
                    <div className="col">
                      <label>Password</label>
                    </div>
                    <div className="col-auto">
                      <Link className="text-muted" to="/forgotpassword">
                        Forgot password?
                      </Link>
                    </div>
                  </div>
                  <input
                    className="form-control"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-group text-center">
                  <button
                    className="btn btn-primary account-btn"
                    onClick={handleLoginWithEmailAndPassword}
                  >
                    Login
                  </button>
                </div>
              </div>
              {/* /Account Form */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Loginpage;

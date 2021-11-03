import React from 'react';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';

import './style.css';

const Landing = () => {
  const history = useHistory();

  return (
    <div className="home_wrapper">
      <div className="home__btns-wrapper">
        <Button
          size="large"
          shape="round"
          onClick={() => history.push('/login')}
        >
          Login
        </Button>
        <Button
          size="large"
          shape="round"
          onClick={() => history.push('/signup')}
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default Landing;

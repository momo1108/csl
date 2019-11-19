import React from 'react';
import { Spinner as Loader } from 'react-bootstrap';
import './Spinner.css';

const Spinner = () => {
  return (
    <div className="loadbox">
      <Loader animation="border"></Loader>
      <p>로딩 중...</p>      
    </div>
  );
};

export default Spinner;
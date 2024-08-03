// import React from 'react'
import { Helmet } from "react-helmet";
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Helmet><title>Home - Quick Survey</title></Helmet>
      <h1>Welcome to the Survey</h1>
      <button className="my-5" onClick={()=>navigate('/survey')}>Start Survey</button>
    </div>
  );
};

export default Home;

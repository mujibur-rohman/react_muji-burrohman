import React from 'react';

const Home = () => {
  return (
    <div className="row hero px-5 align-items-center">
      <div className="col">
        <h2>Think positive about our Climate</h2>
        <p>
          We’ve compiled a list of effective ways to reduce your environmental
          footprint. The biggest game changers are labelled "top tips".
        </p>
      </div>
      <div className="col text-center">
        <img src="assets/img/image-home.png" className="w-75" alt="home" />
      </div>
    </div>
  );
};

export default Home;

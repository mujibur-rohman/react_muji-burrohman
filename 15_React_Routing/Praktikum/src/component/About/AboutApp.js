import React from 'react';

const AboutApp = () => {
  return (
    <div className="about">
      <h1>About App</h1>
      <p>
        In this app, you can add, delete, submit and edit items. This app will
        persist your data in the browser local storage. So whether you reload,
        close your app or reopened it, you still have access to your todos
        items.
      </p>
    </div>
  );
};

export default AboutApp;

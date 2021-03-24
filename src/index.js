import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header';

// import About from './components/About/About';
// import Work from './components/Work/Work';
// import Contact from './components/Contact/Contact';


ReactDOM.render(
    <React.StrictMode>
      <Header />
      {/* <About />
      <Work />
      <Contact /> */}
    </React.StrictMode>,
    document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  
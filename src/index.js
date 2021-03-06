import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Work from './components/Work/Work';
import WorkData from "./components/Work/WorkData";

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <Home />
        <Work workData={WorkData}/>
    </React.StrictMode>,
    document.getElementById('root')
);

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

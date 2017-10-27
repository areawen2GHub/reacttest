/**
 * 路由
 */
import React from 'react';
// import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';

//  引入路由界面
import Main from './Main';
import Clock from './Clock';
import ExchangeRate from './ExchangeRate';


const BasicRouter = () => (
  <Router>
      <div>
        <Route exact path="/" component={Main} />
        <Route path="/clock" component={Clock} />
        <Route path="/exchangerate" component={ExchangeRate} /> 
      </div>     
  </Router>
);

export default BasicRouter;
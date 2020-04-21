// app.js
import "@babel/polyfill";
import Header from './component/Header'
import User from './component/User'
import Content from './component/Content';
import "./app.scss";

const app = function() {
  document.getElementById('header').innerHTML = Header();
  document.getElementById('content').innerHTML = Content();
  
}

// Init app
app();


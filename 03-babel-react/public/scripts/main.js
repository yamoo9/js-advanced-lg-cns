import React from './libs/react.js';
import ReactDOM from './libs/react-dom.js';
import App from './App.js';
const container = document.getElementById('root');
const reactDomRoot = ReactDOM.createRoot(container);
reactDomRoot.render(React.createElement(React.StrictMode, null, React.createElement(App, null)));
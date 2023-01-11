import React from './libs/react.js';
import Headline from './components/Headline.js';
import SubjectList from './components/SubjectList.js';
class App extends React.Component {
  render() {
    return React.createElement("div", {
      className: "App"
    }, React.createElement(Headline, null), React.createElement(SubjectList, null));
  }
}
export default App;
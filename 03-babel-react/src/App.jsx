import React from './libs/react.js';
import Headline from './components/Headline.js';
import SubjectList from './components/SubjectList.js';

// React World
// Component Types
// - Class

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Headline />
        <SubjectList />
      </div>
    );
  }
}

export default App;

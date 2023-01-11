import { useState } from 'react';
import reactLogo from '@/assets/react.svg';
import { Card } from '@/components';

import './App.css';

function App() {
  // 2018  : React Class Component this.state, this.setState()
  // 2019+ : React Hooks (Functional Programming)
  // Memoization Pattern
  const [count, setCount] = useState<number>(0);

  return (
    <div className="App">
      <App.NavLinks />
      <h1>Vite + React</h1>
      <Card
        count={count}
        onIncrement={() => {
          setCount(count + 1);
        }}
      >
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

App.NavLinks = function AppNavLinks() {
  return (
    <nav aria-label="navigation headline">
      <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
        <img src="/vite.svg" className="logo" alt="Vite 공식 홈페이지" />
      </a>
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        <img src={reactLogo} className="logo react" alt="React 공식 홈페이지" />
      </a>
    </nav>
  );
};

export default App;

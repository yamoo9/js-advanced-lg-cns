import React from './libs/react.js';
import Headline from './components/Headline.js';
import SubjectList from './components/SubjectList.js';

// React World
// Component Types
// - Class
// - Component State & Lifecycle Methods

class App extends React.Component {
  constructor(props) {
    super(props);

    // 선언형 프로그래밍
    // 선언된 상태를 기반 프로그래밍
    this.state = {
      subjects: [
        { id: 'subject-1', content: 'ECMAScript', href: 'https://babeljs.io' },
        { id: 'subject-2', content: 'TypeScript', href: 'https://babeljs.io' },
        { id: 'subject-3', content: 'Jest', href: 'https://babeljs.io' },
        { id: 'subject-4', content: 'Babel', href: 'https://babeljs.io' },
        { id: 'subject-5', content: 'React', href: 'https://babeljs.io' },
        { id: 'subject-6', content: 'Vue', href: 'https://babeljs.io' },
        { id: 'subject-7', content: 'Webpack', href: 'https://babeljs.io' },
        { id: 'subject-8', content: 'Vite', href: 'https://babeljs.io' },
        { id: 'subject-9', content: 'Next.js', href: 'https://babeljs.io' },
      ],
      isHeadlineColorful: false,
    };

    this.handleChangeHeadlineColor = this.handleChangeHeadlineColor.bind(this);
  }

  handleChangeHeadlineColor() {
    this.setState(({ isHeadlineColorful }) => ({
      isHeadlineColorful: !isHeadlineColorful,
    }));
  }

  render() {
    const { isHeadlineColorful, subjects } = this.state;

    return (
      <div className="App">
        <Headline colorful={isHeadlineColorful} />
        <button type="button" onClick={this.handleChangeHeadlineColor}>
          {isHeadlineColorful ? '언컬러풀 헤드라인' : '컬러풀 헤드라인'}
        </button>
        <SubjectList subjects={subjects} />
      </div>
    );
  }
}

export default App;

import React from './libs/react.js';
import Headline from './components/Headline.js';
import SubjectList from './components/SubjectList.js';
class App extends React.Component {
  state = {
    subjects: [{
      id: 'subject-1',
      content: 'ECMAScript',
      href: 'https://babeljs.io'
    }, {
      id: 'subject-2',
      content: 'TypeScript',
      href: 'https://babeljs.io'
    }, {
      id: 'subject-3',
      content: 'Jest',
      href: 'https://babeljs.io'
    }, {
      id: 'subject-4',
      content: 'Babel',
      href: 'https://babeljs.io'
    }, {
      id: 'subject-5',
      content: 'React',
      href: 'https://babeljs.io'
    }, {
      id: 'subject-6',
      content: 'Vue',
      href: 'https://babeljs.io'
    }, {
      id: 'subject-7',
      content: 'Webpack',
      href: 'https://babeljs.io'
    }, {
      id: 'subject-8',
      content: 'Vite',
      href: 'https://babeljs.io'
    }, {
      id: 'subject-9',
      content: 'Next.js',
      href: 'https://babeljs.io'
    }],
    isHeadlineColorful: false
  };
  handleChangeHeadlineColor = () => {
    this.setState(_ref => {
      let {
        isHeadlineColorful
      } = _ref;
      return {
        isHeadlineColorful: !isHeadlineColorful
      };
    });
  };
  render() {
    const {
      isHeadlineColorful,
      subjects
    } = this.state;
    return React.createElement("div", {
      className: "App"
    }, React.createElement(Headline, {
      colorful: isHeadlineColorful
    }), React.createElement("button", {
      type: "button",
      onClick: this.handleChangeHeadlineColor
    }, isHeadlineColorful ? '언컬러풀 헤드라인' : '컬러풀 헤드라인'), React.createElement(SubjectList, {
      subjects: subjects
    }));
  }
}
export default App;
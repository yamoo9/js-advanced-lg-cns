// Web API + ES Next 활용 → ES5(2009)

// DOM API
const headline = document.createElement('h1');
// headline.className = 'headline';
// headline.setAttribute('class', 'headline');
// headline.classList.add('headline');
headline.textContent = '안녕! React & Babel 😃';

// Event Listeners
const handleMouseOver = (e) => {
  console.log(e.target);
  e.target.style.color = 'orange';
};

const handleMouseOut = (e) => {
  e.target.removeAttribute('style');
};

// Event Handling
headline.addEventListener('mouseenter', handleMouseOver);
headline.addEventListener('mouseleave', handleMouseOut);

// Legacy DOM API
let container = document.getElementById('root');
// Selector API
// container = document.querySelector('#root');

// Insertion (mount);
container.insertAdjacentElement('beforeend', headline);

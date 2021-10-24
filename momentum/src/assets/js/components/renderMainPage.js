import createDomElement from '@js/utils/createDomElement.js';
// import './menu.scss';

export default function renderMainPage() {
  const body = document.querySelector('body');
    
  createDomElement('div', 'wrapper', '', body);

  const mainWrapper = createDomElement('div', 'city', 'Saratov', wrapper);
}

renderMainPage();
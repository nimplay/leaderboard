import data from './data.js';

const displayList = () => {
  let i = 0;
  data.forEach((e) => {
    const listUl = document.querySelector('.score-table');
    const itemLi = document.createElement('li');
    const item = `${e.name} : ${e.score}`;
    itemLi.className = 'item';
    itemLi.setAttribute('id', `li${i}`);
    i += 1;
    const liId = itemLi.getAttribute('id');
    listUl.appendChild(itemLi);
    document.getElementById(liId).textContent = item;
  });
};

export default displayList;
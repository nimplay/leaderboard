import data from './data.js';
import displayList from './leaderboard.js';
import saveData from './save.js';

const newData = () => {
  const yourName = document.querySelector('.name-box');
  const yourScore = document.querySelector('.score-box');
  const addBtn = document.querySelector('.submit-button');

  addBtn.addEventListener('click', () => {
    let obj = {};
    if (yourName.value && yourScore.value) {
      obj = {
        name: yourName.value,
        score: yourScore.value,
      };
    }
    data.push(obj);
    saveData();
    displayList();
    yourName.value = '';
    yourScore.value = '';
  });
};

export default newData;
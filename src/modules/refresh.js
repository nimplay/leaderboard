import Result from './results.js';

const refresh = async () => {
  const listUl = document.querySelector('.score-table');
  listUl.innerHTML = '';
  const results = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I5XXuZZnjyV0RpIzFybj/scores/');
  const data = await results.json();
  let arr = data.result;
  // sorting arr
  arr.sort(((a, b) => b.score - a.score));

  arr.forEach((e) => {
    const savedRecord = Result.record(e.user, e.score);
    listUl.innerHTML += savedRecord;
  });
};

export default refresh;

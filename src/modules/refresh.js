import Result from "./results";

const refresh = async () => {
  const listUl = document.querySelector('.score-table');
  const results = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bmBsWnBXvVGZ5GV7fqzY/scores/');
  const data = await results.json();
  const arr = data.result;
  arr.forEach((e) => {    
    const savedRecord = Result.record(e.user, e.score);
    listUl.innerHTML += savedRecord;
  });
};

export default refresh;

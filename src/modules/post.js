const postScore = async (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/bmBsWnBXvVGZ5GV7fqzY/scores/';
  const result = await fetch(`${gameUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user, score }),
  });
  const data = await result.json();
  const yourName = document.querySelector('.name-box');
  const yourScore = document.querySelector('.score-box');
  yourName.value = '';
  yourScore.value = '';
  return data;
};

export default postScore;
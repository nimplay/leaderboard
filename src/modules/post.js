const postScore = async (e) => {
  e.preventDefault();
  const user = document.getElementById('name').value;
  let score = document.getElementById('score').value;
  if (score.length > 10) {
    score = '+9999999999';
  }
  const gameUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/I5XXuZZnjyV0RpIzFybj/scores/';
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
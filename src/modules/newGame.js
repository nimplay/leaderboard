const newGame = async () => {
  let gameId = [];
  const res = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: 'Score' }),
  });
  const data = await res.json();
  gameId = (data.result).split(' ');
  return gameId[3];
};
module.exports = newGame;
class Result {
  static record(user, score) {
    return `
      <li class="result" data-id=${user}>
        <span class="user" data-id=${user}>${user}: &nbsp; </span>
        <span class="score" data-id=${user}>${score}</span>
      </li>
      `;
  }
}

export default Result;
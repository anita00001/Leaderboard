// add-score.js
const addScore = (name, score, leaderBoard) => {
  const updateLeaderBoard = {
    name,
    score,
  };
  leaderBoard.push(updateLeaderBoard);
  return leaderBoard;
};

export default addScore;
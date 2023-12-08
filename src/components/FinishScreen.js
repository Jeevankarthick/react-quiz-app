function FinishScreen({ points, maxPossiblePoints, highScore, dispatch }) {
  const pointsPercentage = Math.ceil((points / maxPossiblePoints) * 100);

  let emoji;
  if (pointsPercentage === 100) emoji = "🎖️";
  else if (pointsPercentage > 80 && pointsPercentage <= 100) emoji = "🥳";
  else if (pointsPercentage > 60 && pointsPercentage <= 80) emoji = "😁";
  else if (pointsPercentage > 40 && pointsPercentage <= 60) emoji = "😑";
  else if (pointsPercentage > 0 && pointsPercentage <= 40) emoji = "🙃";
  else if (pointsPercentage === 0) emoji = "🤦";

  return (
    <>
      <p className="result">
        <span>{emoji}</span>
        You scored <strong>{points}</strong> / {maxPossiblePoints} points (
        {pointsPercentage}%)
      </p>
      <p className="highscore">(Highscore: {highScore} points)</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "restart" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;

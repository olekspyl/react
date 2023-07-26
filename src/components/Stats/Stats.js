const Stats = ({ stats, total, positivePercentage }) => {
  const keys = Object.keys(stats);
  const elems = keys.map((item, idx) => {
    return (
      <li key={idx}>
        <span>
          {item}: {stats[item]}
        </span>
      </li>
    );
  });
  return (
    <>
      {elems}
      <li>
        <span>total feedback: {total()}</span>
      </li>
      <li>
        <span> positive percentage: {positivePercentage()}%</span>
      </li>
    </>
  );
};

export { Stats };

const Stats = ({ stats }) => {
  const keys = Object.keys(stats);

  return keys.map((item, idx) => {
    return (
      <li key={idx}>
        <span>
          {item}: {stats[item]}
        </span>
      </li>
    );
  });
};

export { Stats };

const ButtonEl = ({ stats, handleButton }) => {
  const keys = Object.keys(stats);

  return keys.map((item, idx) => {
    return (
      <li key={idx}>
        <button onClick={handleButton} type="button" className="btn btn-light">
          {item}
        </button>
      </li>
    );
  });
};

export { ButtonEl };

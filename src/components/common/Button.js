const Button = ({
  classes,
  name,
  action = () => console.log(),
  testId,
}) => (
  <button
    className={`en-button ${classes}`}
    onClick={() => action()}
    data-testid={testId}
  >
    {name}
  </button>
);

export default Button;

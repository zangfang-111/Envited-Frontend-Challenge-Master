const Button = ({
  classes,
  name,
  action = () => console.log()
}) => (
  <button
    className={`en-button ${classes}`}
    onClick={() => action()}
  >
    {name}
  </button>
);

export default Button;

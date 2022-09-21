function Input ({
  placeholder,
  onChange,
  value,
  name,
  invalid,
}) {
  const err = invalid && value === '';

  return (
    <input
      className={`en-input ${err ? 'error' : ''}`}
      type='text'
      placeholder={placeholder}
      onChange={e => onChange(name, e)}
      value={value}
      name={name}
      data-testid={name}
    />
  )
}

export default Input

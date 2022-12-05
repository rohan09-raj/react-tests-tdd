import React from 'react'

const StarbucksInput = ({name, value, onChange, error}) => {
  return (
    <>
      <input
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      aria-label={name}
      aria-invalid={!!error}
    />
    {error && <span>{error}</span>}
    </>
  )
}

export default StarbucksInput
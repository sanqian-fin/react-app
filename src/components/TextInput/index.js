import React from 'react'
import PropTypes from 'prop-types'

function TextInput({ label, ...props }) {
  if (label) {
    return (
      <label>
        {label}:
        <input {...props} />
      </label>
    )
  }
  return <input {...props} />
}

TextInput.propTypes = {
  label: PropTypes.string,
}

export default TextInput

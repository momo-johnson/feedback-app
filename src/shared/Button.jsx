import React from 'react'
import PropTypes from 'prop-types'

function Button({children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
    {children}
    </button>
  )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    type: PropTypes.string,
    version: PropTypes.string
}

Button.defaultProps = {
    version: 'primary',
    type: "button",
    isDisabled: false
}
export default Button

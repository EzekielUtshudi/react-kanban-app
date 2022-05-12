import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ ...props }) {
  return (
    <button
      id={props.id}
      className={`rounded min-w-fit capitalize ${props.twClasses}`}
      type={props.type === 'submit' ? 'submit' : 'button'}
      onClick={props.handleClick}
    >
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  text: '',
  handleClick: () => {},
  twClasses: '',
};

Button.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  text: PropTypes.string,
  twClasses: PropTypes.string,
  handleClick: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';

export default function Badge({ ...props }) {
  return (
    <div
      data-testid="badge"
      className={`rounded-lg min-w-fit uppercase ${props.twClasses}`}
    >
      {props.text}
    </div>
  );
}

Badge.defaultProps = {
  twClasses: '',
  text: '',
};

Badge.propTypes = {
  text: PropTypes.string,
  twClasses: PropTypes.string,
};

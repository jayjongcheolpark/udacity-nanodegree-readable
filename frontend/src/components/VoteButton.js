import React from 'react';
import PropTypes from 'prop-types';

const VoteButton = ({ clickHandler, btnClass, iconClass }) => (
  <button onClick={clickHandler} className={btnClass}>
    <i className={iconClass} aria-hidden="true" />
  </button>
);

VoteButton.defaultProps = {
  btnClass: 'btn btn-outline-primary mr-2',
  iconClass: 'fa fa-thumbs-o-up',
};
VoteButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  btnClass: PropTypes.string,
  iconClass: PropTypes.string,
};

export default VoteButton;

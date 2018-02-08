import React from 'react';
import PropTypes from 'prop-types';
import VoteButton from './VoteButton';

const VoteButtons = ({ voteUp, voteDown }) => (
  <div className="d-flex">
    <VoteButton clickHandler={voteUp} />
    <VoteButton clickHandler={voteDown} btnClass="btn btn-outline-secondary" iconClass="fa fa-thumbs-o-down" />
  </div>
);

VoteButtons.propTypes = {
  voteUp: PropTypes.func.isRequired,
  voteDown: PropTypes.func.isRequired,
};

export default VoteButtons;

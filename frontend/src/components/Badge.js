import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const Badge = ({ label, badgeColor, disabled, voteCount }) => {
  const voteBadge = voteCount !== undefined && <span className="text-warning"> {voteCount}</span>;

  return (
    <span className={`badge ${badgeColor} mr-2 px-1`} disabled={disabled}>
      {_.capitalize(label)}
      {voteBadge}
    </span>
  );
};

Badge.defaultProps = {
  label: '',
  badgeColor: 'badge-primary',
  disabled: true,
  voteCount: undefined,
};

Badge.propTypes = {
  label: PropTypes.string,
  badgeColor: PropTypes.string,
  disabled: PropTypes.bool,
  voteCount: PropTypes.number,
};

export default Badge;

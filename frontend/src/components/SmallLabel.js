import React from 'react';
import PropTypes from 'prop-types';

const SmallLabel = ({ label }) => (
  <div>
    <small className="text-muted">{label}</small>
  </div>
);

SmallLabel.propTypes = {
  label: PropTypes.string.isRequired,
};

export default SmallLabel;

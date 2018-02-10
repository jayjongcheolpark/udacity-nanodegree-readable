import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const InputArea = ({ id, value, handleChange, required, label, disabled }) => (
  <div className="form-group">
    <label htmlFor={id}>{_.capitalize(label)}</label>
    <textarea
      type="text"
      className="form-control"
      id={id}
      value={value}
      required={required}
      disabled={disabled}
      onChange={e => handleChange(e, id)}
      placeholder={`Enter ${_.capitalize(label)}`}
    />
  </div>
);

InputArea.defaultProps = {
  required: true,
  disabled: false,
};

InputArea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default InputArea;

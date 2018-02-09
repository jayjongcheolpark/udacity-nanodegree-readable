import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

const InputText = ({ id, value, handleChange, required, disabled }) => (
  <div className="form-group">
    <label htmlFor={id}>{_.capitalize(id)}</label>
    <input
      type="text"
      className="form-control"
      id={id}
      value={value}
      required={required}
      disabled={disabled}
      onChange={e => handleChange(e, id)}
      placeholder={`Enter ${_.capitalize(id)}`}
    />
  </div>
);

InputText.defaultProps = {
  required: true,
  disabled: false,
};

InputText.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default InputText;

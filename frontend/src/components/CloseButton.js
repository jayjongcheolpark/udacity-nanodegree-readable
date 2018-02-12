import React from 'react';
import PropTypes from 'prop-types';

function CloseButton({ closeHandler }) {
  return (
    <button type="button" className="close ml-2" aria-label="Close" onClick={closeHandler}>
      <span aria-hidden="true">&times;</span>
    </button>
  );
}

CloseButton.propTypes = {
  closeHandler: PropTypes.func.isRequired,
};

export default CloseButton;

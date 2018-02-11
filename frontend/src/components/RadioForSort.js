import React from 'react';
import PropTypes from 'prop-types';

const RadioForSort = ({ sortBy, changeHandler }) => (
  <div className="d-flex align-items-center">
    <small className="mr-3">Sort By</small>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="radioDate"
        value="date"
        onChange={changeHandler}
        checked={sortBy === 'date'}
      />
      <label className="form-check-label" htmlFor="radioDate">
        <small>Date</small>
      </label>
    </div>
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id="radioScore"
        value="score"
        onChange={changeHandler}
        checked={sortBy === 'score'}
      />
      <label className="form-check-label" htmlFor="radioScore">
        <small>Score</small>
      </label>
    </div>
  </div>
);

RadioForSort.propTypes = {
  sortBy: PropTypes.oneOf(['date', 'score']).isRequired,
  changeHandler: PropTypes.func.isRequired,
};

export default RadioForSort;

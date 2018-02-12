import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RadioButton from './RadioButton';
import { getAllCategories } from '../redux/actions';

class RadioForm extends Component {
  componentDidMount() {
    this.props.getAllCategories();
  }
  render() {
    const { label, handleChange, checkedVal, categories, disabled } = this.props;

    const renderRadioBtn = disabled ? (
      <RadioButton key={checkedVal} evtName="category" val={checkedVal} handleChange={handleChange} checked disabled />
    ) : (
      categories.map(category => (
        <RadioButton
          key={category}
          evtName="category"
          val={category}
          handleChange={handleChange}
          checked={checkedVal === category}
          disabled={disabled}
        />
      ))
    );

    return (
      <div>
        <div>{label}</div>
        <div className="btn-group btn-group-toggle mb-4" data-toggle="buttons">
          {renderRadioBtn}
        </div>
      </div>
    );
  }
}

RadioForm.defaultProps = {
  disabled: false,
};

RadioForm.propTypes = {
  label: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checkedVal: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  getAllCategories: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

const mapStateToProps = ({ categories }) => ({
  categories,
});

export default connect(mapStateToProps, { getAllCategories })(RadioForm);

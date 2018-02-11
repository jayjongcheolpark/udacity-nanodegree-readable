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
    return (
      <div>
        <div>{label}</div>
        <div className="btn-group btn-group-toggle mb-4" data-toggle="buttons">
          {categories
            .filter(category => category !== 'all')
            .map(category => (
              <RadioButton
                key={category}
                evtName="category"
                val={category}
                handleChange={handleChange}
                checked={checkedVal === category}
                disabled={disabled}
              />
            ))}
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

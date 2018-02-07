import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getAllCategories, getPostsByCategory } from '../redux/actions';

const btnWidth = { width: '100px' };
const defaultStyle = 'btn btn-outline-light mr-2';
const activeStyle = 'btn btn-light mr-2';

class Filter extends Component {
  state = {
    active: this.props.filter || 'all',
  };

  componentDidMount() {
    this.props.getAllCategories();
  }

  componentWillReceiveProps(nextProps) {
    const nextFilters = nextProps.filters;
    const thisFilters = this.props.filters;
    if (thisFilters.length === 0 && nextFilters.length !== 0) {
      nextFilters.forEach(filter => {
        this.props.getPostsByCategory(filter);
      });
    }
  }

  styleSelector = filter => (this.state.active === filter ? activeStyle : defaultStyle);

  clickHandler = filter => {
    this.setState({
      active: filter,
    });
  };

  render() {
    const { filters } = this.props;

    const renderLinks = filters.map(filter => (
      <Link
        className={this.styleSelector(filter)}
        to={`/${filter}`}
        key={filter}
        style={btnWidth}
        onClick={e => this.clickHandler(filter)}
      >
        {_.capitalize(filter)}
      </Link>
    ));

    return (
      <div className="d-flex justify-content-start align-items-center">
        <Link className={this.styleSelector('all')} to="/" style={btnWidth} onClick={e => this.clickHandler('all')}>
          All
        </Link>
        {renderLinks}
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  filters: categories,
});

export default connect(mapStateToProps, { getAllCategories, getPostsByCategory })(Filter);

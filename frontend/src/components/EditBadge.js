import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const EditBadge = ({ link }) => (
  <Link className="badge badge-success" to={link}>
    Edit <i className="fa fa-pencil-square-o" aria-hidden="true" />
  </Link>
);

EditBadge.propTypes = {
  link: PropTypes.string.isRequired,
};

export default EditBadge;

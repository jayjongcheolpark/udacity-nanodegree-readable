import React from 'react';
import { Link } from 'react-router-dom';

const NewPostButton = () => (
  <div className="mt-4 d-flex flex-row-reverse">
    <Link className="btn btn-success" to="/new">
      New Post <i className="fa fa-pencil-square-o" aria-hidden="true" />
    </Link>
  </div>
);

export default NewPostButton;

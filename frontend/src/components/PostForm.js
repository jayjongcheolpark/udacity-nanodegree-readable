import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputText from './InputText';
import InputArea from './InputArea';
import RadioForm from './RadioForm';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: 'react',
      title: '',
      body: '',
      author: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    const { category, title, body, author } = nextProps.post;
    this.setState({
      category,
      title,
      body,
      author,
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const { category, title, author, body } = this.state;
    this.props.submitPost({
      id: this.props.post.id,
      category,
      title,
      body,
      author,
    });
  };

  handleChange = (e, key) => {
    this.setState({
      [key]: e.target.value,
    });
  };

  render() {
    const { isNew } = this.props;
    const { category, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <RadioForm label="Category" checkedVal={category} handleChange={this.handleChange} disabled={!isNew} />
          <InputText id="title" value={title} handleChange={this.handleChange} required />
          <InputArea id="body" value={body} handleChange={this.handleChange} label="content" required />
          <InputText
            id="author"
            value={this.state.author}
            handleChange={this.handleChange}
            required={isNew}
            disabled={!isNew}
          />
          <div className="mt-5">
            <button type="submit" className="btn btn-lg btn-primary btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

PostForm.defaultProps = {
  post: {
    id: '',
    category: 'react',
    title: '',
    body: '',
    author: '',
  },
};

PostForm.propTypes = {
  isNew: PropTypes.bool.isRequired,
  post: PropTypes.shape({
    id: PropTypes.string,
    category: PropTypes.string,
    title: PropTypes.string,
    body: PropTypes.string,
    author: PropTypes.string,
  }),
  submitPost: PropTypes.func.isRequired,
};

export default PostForm;

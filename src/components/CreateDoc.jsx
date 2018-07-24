import React from 'react';

class CreateDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: ''
    };
  }

  update(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  onSubmit = e => {
    e.preventDefault();
    const { createDoc } = this.props;
    createDoc(this.state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor="doc-name">
          Document Name:{' '}
          <input type="text" name="doc-name" onChange={this.update('name')} />
        </label>
        <label htmlFor="doc-content">
          Document Content:{' '}
          <textarea name="doc-content" onChange={this.update('content')} />
        </label>
        <input type="submit" value="Create Document" />
      </form>
    );
  }
}

export default CreateDoc;

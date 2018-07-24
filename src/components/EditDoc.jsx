import React from 'react';

class EditDoc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      content: ''
    };
  }

  updateField(field) {
    return e => {
      this.setState({
        [field]: e.target.value
      });
    };
  }

  componentDidMount() {
    // eslint-disable-next-line
    const {
      match: {
        params: { name }
      },
      fetchOneDoc
    } = this.props;
    fetchOneDoc(name).then(res => {
      this.setState({
        name,
        ...res.data
      });
    });
  }

  onSubmit = e => {
    e.preventDefault();
    const { updateDoc } = this.props;
    updateDoc(this.state);
  };

  render() {
    const { name, content } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <span>{name}: </span>
        <textarea value={content} onChange={this.updateField('content')} />
        <input type="submit" value="Edit Document" />
      </form>
    );
  }
}

export default EditDoc;

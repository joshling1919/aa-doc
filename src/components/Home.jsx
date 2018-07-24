import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchDocs();
  }
  render() {
    const { docs } = this.props;
    return (
      <div>{docs.map((doc, i) => <div key={i}>{doc.lastChangeBy}</div>)}</div>
    );
  }
}

export default Home;

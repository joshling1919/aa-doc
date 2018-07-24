import React from 'react';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchDocs();
  }
  render() {
    const { docs } = this.props;
    return (
      <div>
        {Object.keys(docs)
          .reverse()
          .map((docName, i) => {
            const doc = docs[docName];
            return (
              <div key={docName + i}>
                <span>
                  {`Name: ${docName} last changed by ${doc.lastChangeBy}`}
                </span>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Home;

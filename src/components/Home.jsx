import React from 'react';
import { Link } from 'react-router-dom';

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
          .map((name, i) => {
            const doc = docs[name];
            return (
              <div key={name + i}>
                <span>
                  <Link to={`/edit/${name}`}>{name}</Link>
                  {`last changed by ${doc.lastChangeBy}`}
                </span>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Home;

import React from 'react';

const Header = ({ user, logout }) => {
  if (user) {
    return (
      <div>
        {`Hi ${user}!`}
        <button onClick={() => localStorage.removeItem('aa-doc-user')}>
          Sign Out
        </button>
      </div>
    );
  } else {
    return (
      <form onSubmit={e => localStorage.setItem('aa-doc-user', e.target.valu)}>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
};

export default Header;

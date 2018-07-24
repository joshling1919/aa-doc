import React from 'react';

const Header = ({ user, logout, login }) => {
  if (user) {
    return (
      <div>
        {`Hi ${user}!`}
        <button onClick={logout}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <form onSubmit={login}>
        <input type="text" />
        <input type="submit" />
      </form>
    );
  }
};

export default Header;

import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ user, logout, login }) => {
  let userInfo = (
    <form onSubmit={login}>
      <input type="text" placeholder="Username" />
      <input type="submit" value="Log In" />
    </form>
  );
  if (user) {
    userInfo = (
      <div>
        {`Hi ${user}!`}
        <button onClick={logout}>Log Out</button>
      </div>
    );
  }

  return (
    <div>
      {userInfo}
      <Link to={'/new'}>Create a New Doc</Link>
    </div>
  );
};

export default Header;

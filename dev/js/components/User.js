import React from 'react';

const User = (props) => {

  const { user } = props;

  return (
    <div className="user">
        <img src={user.image_url} alt={user.name} />
        <div className="name">
          {user.name}
        </div>
    </div>
  );
}

export default User;

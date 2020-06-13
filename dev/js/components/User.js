import React from 'react';

const User = (props) => {

  const { user } = props;

  return (
    <div className="user">
      <div className="user-image">
        <img src={user.image_url} alt={user.name} />
      </div>
      <div className="name">
        {user.name}
      </div>
    </div>
  );
}

export default User;

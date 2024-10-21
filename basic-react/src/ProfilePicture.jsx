import React from 'react';

const ProfilePicture = () => {
  const imageURL = './src/assets/profile.png';

  const handleClick = (e) => (e.target.style.display = 'none');

  return <img src={imageURL} onClick={(e) => handleClick(e)}></img>;
};

export default ProfilePicture;

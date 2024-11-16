import React from 'react';
import { Avatar } from '@radix-ui/react-avatar';

const AvatarComponent = ({ username, avatarUrl }) => {
  return (
    <a href={`https://github.com/${username}`} target="_blank" rel="noopener noreferrer">
      <Avatar>
        <Avatar.Image src={avatarUrl} alt={`${username}'s avatar`} />
      </Avatar>
    </a>
  );
};

export default AvatarComponent;

import PropTypes from 'prop-types';
import React from 'react';
import { Image } from 'react-native';


const Avatar = ({ src, size }) => (
  <Image
    style={{
      width: size,
      height: size,
      borderRadius: size / 10,
      borderColor: 'rgba(0,0,0,0.1)',
      borderWidth: 0.1,
    }}
    source={{ uri: src }}
  />
);

Avatar.defaultProps = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-',
  size: 80,
};

Avatar.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
};

export default Avatar;

import PropTypes from 'prop-types';
import React from 'react';
import { Image, View, Text } from 'react-native';

const AvatarWithStatus = ({ src, size, time }) => (
  <View
    style={{
      position: 'relative',
    }}
  >
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
    {Date.now().valueOf() - time < 120000 ?
      <Text
        style={{
          position: 'absolute',
          right: -(size / 30),
          bottom: -1,
          width: size > 40 ? (size / 5) : (size / 3),
          height: size > 40 ? (size / 5) : (size / 3),
          backgroundColor: 'green',
          borderRadius: size / 5,
          borderColor: 'white',
          borderWidth: size / 40,
        }}
      /> : null
    }
  </View>

);

AvatarWithStatus.defaultProps = {
  src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8B0hBF1hdy4mTfoMA1Gp0kxYtbp8hSXjbWyTUHoQWs0xbRIs-',
  size: 80,
  time: null,
};

AvatarWithStatus.propTypes = {
  src: PropTypes.string,
  size: PropTypes.number,
  time: PropTypes.number,
};

export default AvatarWithStatus;

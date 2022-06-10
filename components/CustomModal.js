import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import PropTypes from 'prop-types';

const CustomModal = ({children, refRBSheet, borderRadius, height, animationType, onClose, onOpen}) => {
  return (
    <RBSheet
      animationType={animationType}
      height={height}
      onClose={onClose}
      onOpen={onOpen}
      ref={refRBSheet}
      closeOnDragDown={true}
      closeOnPressMask={true}
      customStyles={{
        container: {
          backgroundColor: 'white',
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
        },
      }}>
      {children}
    </RBSheet>
  );
};

export default CustomModal;
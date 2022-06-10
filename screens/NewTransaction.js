import React, {useRef, useEffect} from 'react';
import {Text, View} from 'react-native';
import CustomModal from '../../components/Modal/';
const NewTransaction = ({isVisible, onClose}) => {
  const refRBSheet = useRef();

  useEffect(() => {
    if (isVisible) {
      refRBSheet.current.open();
    } else {
      refRBSheet.current.close();
    }
  }, [isVisible]);

  return (
    <CustomModal refRBSheet={refRBSheet} onClose={onClose}>
      <View>
        <Text>Hello</Text>
      </View>
    </CustomModal>
  );
};

export default NewTransaction;
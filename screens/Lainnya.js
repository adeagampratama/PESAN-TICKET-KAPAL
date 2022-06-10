import React,  { useState }  from 'react';
import {Alert, SafeAreaView, Pressable, Text, View, StyleSheet, StatusBar, useColorScheme, Modal } from 'react-native';

const Lainnya = ({navigation}) => {
    
  const [modalVisible, setModalVisible] = useState(true);
  
    return (
        
        <SafeAreaView>
        <Modal
            animationType="fade"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
            }}
            >
            <View style={styles.modalCard}>
                <View style={styles.modalView}>
                <Text style={{color:'blue'}}>Route Name :</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={{color:'red'}}>Tutup Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        </SafeAreaView>
    );
};

export default Lainnya;
const styles = StyleSheet.create({
    modalCard: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22,
      paddingHorizontal: 30,
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      height: 300,
      width: '100%',
      padding: 30,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
});
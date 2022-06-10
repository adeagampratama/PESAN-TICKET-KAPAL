import React, { useState }  from "react";
import {Button, StyleSheet, Text, View, Pressable, Image, ScrollView, Modal, Alert, } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome5';

const ColumnFA5 = (props) => {
    
  const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.Input}>
            
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Hello World!</Text>
                    <Pressable
                    style={[styles.button, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                    <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
                </View>
            </Modal>

                <Icon name={props.iconName}
                    style={styles.Icons}
                />
                <Pressable
                    style={[styles.button, styles.formButton]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>{props.placeholder}</Text>
                </Pressable>

            </View>
        );
}

export default ColumnFA5;


const styles = StyleSheet.create({
    Input: {
        flexDirection: 'row',
        borderColor: '#000',
        borderRadius: 10,
        marginBottom: 20,
    },
    Icons :{
        color: '#7f7f7f',
        width: 20,
        alignSelf: 'center',
        margin: 10,
        fontSize: 16,
    },
    button: {
        borderRadius: 10,
        padding: 10,
        elevation: 2,
        width: '85%',
        alignSelf: 'center',
    },
    formButton: {
        backgroundColor: "#EFF4F4",
    },
    TextInput: {
        color: '#2196F3',
        width: '85%',
        alignSelf: 'center',
    },
});
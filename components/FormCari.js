import React , { useState }   from "react";
import { Pressable, StyleSheet, Text, View,  Modal, Alert, } from "react-native";
import MIcon from 'react-native-vector-icons/MaterialIcons';
import ColumnFA5 from "./ColumnFA5";
import ColumnMI from "./ColumnMI";

const FormCari = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={styles.container}>
            
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
                style={[styles.Button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
                >
                <Text style={styles.textStyle}>Hide Modal</Text>
                </Pressable>
            </View>
            </View>
        </Modal>

            <Text style={styles.TextInputLabel}> Pelabuhan Awal</Text>
            <ColumnFA5 iconName="ship" placeholder="Pilih Pelabuhan Awal"/>

            <Text style={styles.TextInputLabel}> Pelabuhan Tujuan</Text>
            <ColumnFA5 iconName="anchor" placeholder="Pilih Pelabuhan Tujuan"/>

            <Text style={styles.TextInputLabel}>Kelas Layanan</Text>
            <ColumnMI iconName='airline-seat-recline-normal' placeholder="Pilih Layanan"/>

            <Text style={styles.TextInputLabel}>Tanggal Masuk Pelabuhan</Text>
            <ColumnFA5 iconName='calendar-alt' placeholder="Pilih Tanggal Masuk"/>

            <Text style={styles.TextInputLabel}>Jam Masuk Pelabuhan</Text>
            <ColumnMI iconName='access-time' placeholder="Pilih Jam Masuk"/>
            
            <View >
            <Pressable
                    style={styles.formButton}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                <Text style={styles.textStyle}>Dewasa</Text>
                <Text style={styles.textStyle}>1 Orang</Text>
            </Pressable>
            </View>

            <Pressable 
                style={styles.Button}
            >
                <MIcon name="search" style={styles.Icons}/>
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                    paddingLeft: 20,
                }}>
                    Cari
                </Text>
            </Pressable>
        </View>
        );

}

export default FormCari;

const styles = StyleSheet.create({
    
    container: {
        backgroundColor: 'white',
        borderRadius: 20,
        // marginBottom: -60,
        marginRight: 20,
        marginLeft: 20,
        padding: 20,
    },
    Button: {
        flexDirection: 'row',
        backgroundColor: '#ecc141',
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        marginHorizontal: 30,
        paddingVertical: 10,
    },    
    formButton: {
        alignSelf: 'center',
        backgroundColor: "#EFF4F4",
        borderRadius: 10,
        elevation: 2,
        flexDirection: 'row',
        marginHorizontal: 30,
        padding: 10,
        width: '100%'
    },
    TextInputLabel: {
        backgroundColor: '#fff',
        fontWeight: 'bold', 
        fontSize: 16,
        marginBottom: 10,
    },
    Icons :{
        color: 'white',
        width: 20,
        alignSelf: 'center',
        marginLeft: 70,
        fontSize: 20,
    },
    Input: {
        flexDirection: 'row',
        borderColor: '#000',
        backgroundColor: '#f2f2f2',
        borderRadius: 10,
        marginBottom: 20,
    },
    textStyle: {
        color: '#7f7f7f',
        alignSelf: 'center',
    }
  });
import React from 'react';
import {View, StyleSheet, Text, Button, TextInput, TouchableOpacity, Image, ScrollView, FlatList, Alert,} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator }    from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const tiketCard = (props) => {
    return (
        <View style={styles.tiketCard}>
            <View style={styles.cardTitle}>
                <Text style={styles.pelabuhan}>{props.asal}</Text>
                <Icon style={styles.cardTitleIcon} name='arrow-right'/>
                <Text style={styles.pelabuhan}>{props.tujuan}</Text>
            </View>
            <Text style={styles.cardSubTitle}>Jadwal Masuk Pelabuhan</Text>
            <Text >{props.hari}, {props.tanggal}</Text>
            <Text >{props.pukul} WIB</Text>

            <Text style={styles.cardSubTitle}>Layanan</Text>
            <Text >{props.layanan}</Text>
            <Text >----------------------------------------------</Text>
            
            <View style={styles.total}>
                <Text>
                    {props.usia} x {props.jumlah}
                </Text>
                <Text>Rp{props.harga}</Text>
            </View>
        </View>
    );
};

export default tiketCard;

const   styles = StyleSheet.create({
    tiketCard: {
        height: 230,
        width: 340,
        backgroundColor: '#E9E9E9',
        borderRadius: 5,
        borderColor: '#C4C4C4',
        borderWidth: 1.5,
        paddingVertical: 18,
        paddingHorizontal: 24,
    },
    cardTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cardTitleIcon:{
        color: '#2c51e1',
        fontSize: 20,
        fontWeight: 'bold',
    },
    pelabuhan:{
        fontSize: 19,
        fontWeight: 'bold',
        color: 'black',
    },
    cardSubTitle:{
        marginTop: 14,
        marginBottom: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },
    total:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});
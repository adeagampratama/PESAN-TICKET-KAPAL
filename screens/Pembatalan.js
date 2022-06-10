import React from 'react';
import { SafeAreaView, StyleSheet, Text, View,StatusBar,useColorScheme, Image } from 'react-native';

const Pembatalan = ({navigation}) => {
    
    const isDarkMode = useColorScheme() === 'dark';
    
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <View>
                <Image style={styles.gambar} source={require('../assets/ticket.png')}/>
            </View>
            <Text style={styles.text}>
                Tidak Ada Aktivitas Pembatalan Ticket
            </Text>
        </SafeAreaView>);
};

export default Pembatalan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        marginTop: StatusBar.currentHeight*5,
        
    },
    gambar:{
        width:200,
        height:200,
        backfaceVisibility: 'hidden',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color: '#2c51e1',
    }
});
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createBottomTabNavigator }    from '@react-navigation/bottom-tabs';
import { createStackNavigator }  from '@react-navigation/stack';
import { StyleSheet, Text,  Modal, View, Pressable, StatusBar, SafeAreaView, useColorScheme } from 'react-native';
// import Constants from 'expo-constants';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

import Beranda from './screens/Beranda';
import Pesanan from './screens/Pesanan';
import Pembatalan from './screens/Pembatalan';
import Lainnya from './screens/Lainnya';

const Tab = createBottomTabNavigator();
const ActionsStack = createStackNavigator();

// const Lainnya = () => <View style={{flex: 1, backgroundColor:'blue'}}></View>;

export default function App() {
  
  return (
    <NavigationContainer >
      <Tab.Navigator
      screenOptions={({route}) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Beranda') {
              iconName = focused ? 'home-variant' : 'home-variant-outline';
            } else if (route.name === 'Pesanan') {
              iconName = focused ? 'book' : 'book-outline';
            } else if (route.name === 'Pembatalan') {
              iconName = focused ? 'close-box' : 'close-box-outline';
            } else if (route.name === 'Lainnya') {
              iconName = focused ? 'view-list' : 'view-list-outline';
            }

            // You can return any component that you like here!
            return( <Icons name={iconName} size={size} color={'#2c51e1'}  />
            );
          },
          tabBarActiveTintColor: '#2c51e1',
          tabBarInactiveTintColor: '#2c51e1',
          tabBarActiveBackgroundColor: '#b0e0e6',
          tabBarInactiveBackgroundColor: '#fff',
        })
        }
      >
        <Tab.Screen name="Beranda" component={Beranda}  options={opsiBeranda}/>
        <Tab.Screen name="Pesanan" component={Pesanan}  options={opsiPesanan}/>
        <Tab.Screen name="Pembatalan" component={Pembatalan}  options={opsiPembatalan} />
        <Tab.Screen name="Lainnya" component={Lainnya} options={opsiLainnya} 
          listeners={({navigation}) => ({
           tabPress: event => { 
             event.preventDefault();
             navigation.navigate('Pesanan');
          }
        })}
        />
        
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const Menu = ({navigation}) => <View style={{flex: 1, backgroundColor:'red'}}></View>;

const styles = StyleSheet.create({
  textStyles: {
    color: '#99aa99',
    alignSelf: 'center',
  },
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

const opsiBeranda = {
  headerShown: false,
  headerStyle: {
    backgroundColor: '#fff',
  },
  HeaderOptions: {
    headerMode: 'none',
  }
};
const opsiPesanan = {
  headerTitle: 'Daftar Pesanan',
  headerTitleAlign:'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  headerStyle: {
    backgroundColor: '#2c51e1',
  },
  tabBarLabel: 'Pesanan Saya',
};
const opsiPembatalan = {
  headerTitle: 'Daftar Pembatalan',
  headerTitleAlign:'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  headerStyle: {
    backgroundColor: '#2c51e1',
  },
};
const opsiLainnya = {
  headerShown: false,
  headerTitleAlign:'center',
  headerTitleStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'white',
  },
  headerStyle: {
    backgroundColor: '#2c51e1',
  },
};

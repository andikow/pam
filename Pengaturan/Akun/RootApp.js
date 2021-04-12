import React from "react";
import{ createAppContainer } from "react-navigation";
import{ createStackNavigator } from "react-navigation-stack";
import ProfilpenggunaComponent from './Pengaturan/Akun/Profilpengguna'
import NamaComponent from './Pengaturan/Akun/Nama'
import PassComponent from './Pengaturan/Akun/Pass'
const AppNavigator = createStackNavigator({
    
    Profil: {
        screen: ProfilpenggunaComponent,
            
    },
    Nama: {
        screen: NamaComponent    
    },
    Pass: {
        screen: PassComponent    
    },
}
);
export default createAppContainer(AppNavigator);
import React from "react";
import{ createAppContainer } from "react-navigation";
import{ createStackNavigator } from "react-navigation-stack";
<<<<<<< HEAD
import Profilpengguna from './Profilpengguna.js'
import Nama from './Nama.js'
import Pass from './Pass.js'
const RootAkun = createStackNavigator({

=======
import ProfilpenggunaComponent from './Pengaturan/Akun/Profilpengguna'
import NamaComponent from './Pengaturan/Akun/Nama'
import PassComponent from './Pengaturan/Akun/Pass'
const AppNavigator = createStackNavigator({
    
>>>>>>> 51ca6dfc04b0ff968fb538871f6b4ef2a28f79c2
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
<<<<<<< HEAD
export default createAppContainer(RootAkun);
=======
export default createAppContainer(AppNavigator);
>>>>>>> 51ca6dfc04b0ff968fb538871f6b4ef2a28f79c2

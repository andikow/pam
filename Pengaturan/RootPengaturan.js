import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AsalPengirimanComponent from './AsalPengiriman'
import MenuPengaturanComponent from './MenuPengaturan'
import EkspedisiComponent from './Ekspedisi'

import Profilpengguna from './Akun/Profilpengguna.js';
import Daftaradmin from './Akun/Daftaradmin.js';
import Tambahadmin from './Akun/Tambahadmin.js';

const RootPengaturan = createStackNavigator({
    MenuPengaturan:{
        screen : MenuPengaturanComponent
    },
    AsalPengiriman: {
        screen: AsalPengirimanComponent
    },
    Ekspedisi :{
        screen : EkspedisiComponent
    },
    Profilpengguna :{
        screen : Profilpengguna
    },
    Daftaradmin :{
        screen : Daftaradmin
    },
    Tambahadmin :{
        screen : Tambahadmin
    }
});

export default createAppContainer(RootPengaturan);

import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AsalPengirimanComponent from './AsalPengiriman'
import MenuPengaturanComponent from './MenuPengaturan'
import EkspedisiComponent from './Ekspedisi'

import RootProfil from './Akun/Profilpengguna.js';
import Daftaradmin from './Akun/Daftaradmin.js';
import Tambahadmin from './Akun/Tambahadmin.js';
import MenuBar from '../SideBar/MenuBar.js'


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
    RootProfil :{
        screen : RootProfil
    },
    Daftaradmin :{
        screen : Daftaradmin
    },
    Tambahadmin :{
        screen : Tambahadmin
    },
    MenuBar : {
        screen : MenuBar
    }
});

export default createAppContainer(RootPengaturan);

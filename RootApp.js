import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AsalPengirimanComponent from './Pengaturan/AsalPengiriman'
import MenuPengaturanComponent from './Pengaturan/MenuPengaturan'
import EkspedisiComponent from './Pengaturan/Ekspedisi'

import Profilpengguna from './Pengaturan/Akun/Profilpengguna.js';
import Daftaradmin from './Pengaturan/Akun/Daftaradmin.js';
import Tambahadmin from './Pengaturan/Akun/Tambahadmin.js';


import MenuBar from './SideBar/MenuBar.js'

import CekOngkirComponent from './Pengiriman/CekOngkir'
import CekOngkirDetailComponent from './Pengiriman/CekOngkirDetail'
import MenuPengirimanComponent from './Pengiriman/MenuPengiriman'



const RootPengaturan = createStackNavigator({
    MenuBar : {
        screen : MenuBar
    },
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
    },
    
    MenuPengiriman:{
        screen : MenuPengirimanComponent
    },
    CekOngkir:{
        screen : CekOngkirComponent
    },
    CekOngkirDetail: {
        screen: CekOngkirDetailComponent
    }
});

export default createAppContainer(RootPengaturan);

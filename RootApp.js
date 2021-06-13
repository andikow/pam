import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AsalPengirimanComponent from './Pengaturan/AsalPengiriman'
import MenuPengaturanComponent from './Pengaturan/MenuPengaturan'
import EkspedisiComponent from './Pengaturan/Ekspedisi'

import Profilpengguna from './Pengaturan/Akun/Profilpengguna.js';
import Daftaradmin from './Pengaturan/Akun/Daftaradmin.js';
import Tambahadmin from './Pengaturan/Akun/Tambahadmin.js';

import MainScreenNavigator from './transaksi/Status/TobTab.js';
import Laporan from './transaksi/Laporan/Laporan.js';
import Arsip from './transaksi/Arsip/Toptab.js';

import MenuBar from './SideBar/MenuBar.js'

import CekOngkirComponent from './Pengiriman/CekOngkir'
import CekOngkirDetailComponent from './Pengiriman/CekOngkirDetail'
import MenuPengirimanComponent from './Pengiriman/MenuPengiriman'

import Cash from './Pengaturan/Pembayaran/Cash.js';
import TfBank from './Pengaturan/Pembayaran/TfBank.js';

import StatTransaksi from './screen/statTransaksi.js';

import DaftarProduk from "./Produk/DaftarProduk";
import TambahProduk from "./Produk/TambahProduk";
import TambahTransaksi from "./screen/TambahTransaksi";

const RootApp = createStackNavigator({
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
    },
    Cash:{
        screen: Cash
    },
    TfBank:{
        screen: TfBank
    },
    StatTransaksi:{
        screen: StatTransaksi,
        navigationOptions : {
            title : 'Statistik Toko',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        }
        }
    },
    MainScreenNavigator:{
        screen:MainScreenNavigator,
        navigationOptions : {
            title : 'Status Transaksi',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        }
        }
        
    },

    Laporan:{
        screen:Laporan,
        navigationOptions : {
            title : 'Laporan Transaksi',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        }
    }
    },
    Arsip:{
        screen:Arsip,
        navigationOptions : {
            title : 'Arsip',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        }
    }
    },
    DaftarProduk:{
        screen:DaftarProduk
    },
    TambahProduk:{
        screen: TambahProduk
    },
    TambahTransaksi:{
        screen : TambahTransaksi,
        navigationOptions : {
            title : 'Tambah Transaksi',
        headerStyle : {
            backgroundColor : '#6D73B5'
        },
        headerTintColor : '#fff',
        headerTitleStyle : {
            fontSize : 18
        }
    }

    }
});

export default createAppContainer(RootApp);

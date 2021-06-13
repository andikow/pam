import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MenuPengaturanComponent from '../Pengaturan/MenuPengaturan'
import MenuPengirimanComponent from '../Pengiriman/MenuPengiriman'
import MenuBarComponent from './MenuBar.js'
import DaftarProduk from "../Produk/DaftarProduk";
import TambahTransaksi from "../screen/TambahTransaksi";

const AppNavigator = createStackNavigator({
    MenuBar :{
        screen : MenuBarComponent
    },
    MenuPengaturan:{
        screen : MenuPengaturanComponent
    },
    MenuPengiriman: {
        screen: MenuPengirimanComponent
    },
    DaftarProduk:{
        screen : DaftarProduk
    },
    TambahTransaksi:{
        screen : TambahTransaksi
    }
    

});

export default createAppContainer(AppNavigator);
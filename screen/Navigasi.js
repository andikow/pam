import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import MulaiComponent from './Mulai'
import CekAkunComponent from './CekAkun'
import DaftarAkunComponent from './DaftarAkun.js'
import BerhasilBuatAkunComponent from './BerhasilBuatAkun'
import LoginComponent from './Login'
import PasswordBaruComponent from './PasswordBaru'
import RootApp from './../RootApp.js'
import TambahProduk from "../Produk/TambahProduk";

const AppNavigator = createStackNavigator({
    Mulai : {
        screen : MulaiComponent
        },
    CekAkun : {
        screen : CekAkunComponent
        },
    DaftarAkun : {
        screen : DaftarAkunComponent
        },
    BerhasilBuatAkun : {
        screen : BerhasilBuatAkunComponent
        },
    Login : {
        screen : LoginComponent
        },
    PasswordBaru : {
        screen : PasswordBaruComponent
        },
    RootApp : {
        screen : RootApp,
        navigationOptions: { headerShown: false }
        },
    })

export default createAppContainer(AppNavigator);

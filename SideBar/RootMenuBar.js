import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import MenuPengaturanComponent from '../Pengaturan/MenuPengaturan'
import MenuPengirimanComponent from '../Pengiriman/MenuPengiriman'
import MenuBarComponent from './MenuBar.js'


const AppNavigator = createStackNavigator({
    MenuBar :{
        screen : MenuBarComponent
    },
    MenuPengaturan:{
        screen : MenuPengaturanComponent
    },
    MenuPengiriman: {
        screen: MenuPengirimanComponent
    }
    

});

export default createAppContainer(AppNavigator);
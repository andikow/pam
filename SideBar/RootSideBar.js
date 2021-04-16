import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import drawerComponent from './drawer'
import MenuPengaturanComponent from '../Pengaturan/MenuPengaturan'
import MenuPengirimanComponent from '../Pengiriman/MenuPengiriman'



const AppNavigator = createStackNavigator({
    drawer :{
        screen : drawerComponent
    },
    Sidebar :{
        screen : SideBarComponent
    },
    MenuPengaturan:{
        screen : MenuPengaturanComponent
    },
    MenuPengiriman: {
        screen: MenuPengirimanComponent
    }
    

});

export default createAppContainer(AppNavigator);
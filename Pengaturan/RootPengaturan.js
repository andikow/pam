import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import AsalPengirimanComponent from './AsalPengiriman'
import MenuPengaturanComponent from './MenuPengaturan'
import EkspedisiComponent from './Ekspedisi'

const AppNavigator = createStackNavigator({
    MenuPengaturan:{
        screen : MenuPengaturanComponent
    },
    AsalPengiriman: {
        screen: AsalPengirimanComponent
    },
    Ekspedisi :{
        screen : EkspedisiComponent
    }

});

export default createAppContainer(AppNavigator);
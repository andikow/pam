import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import CekOngkirComponent from './CekOngkir'
import CekOngkirDetailComponent from './CekOngkirDetail'
import MenuPengiriman from "./MenuPengiriman";
import MenuPengirimanComponent from './MenuPengiriman'


const RootPengiriman = createStackNavigator({
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

export default createAppContainer(RootPengiriman);

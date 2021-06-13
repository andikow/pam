import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import DaftarProduk from './DaftarProduk'
import TambahProduk from "./TambahProduk";

const RootProduk = createStackNavigator({
    DaftarProduk:{
        screen : DaftarProduk
    },
    TambahProduk:{
        screen : TambahProduk
    }
});

export default createAppContainer(RootProduk);

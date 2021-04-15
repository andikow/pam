import React from "react";
import{ createAppContainer } from "react-navigation";
import{ createStackNavigator } from "react-navigation-stack";
import Profilpengguna from './Profilpengguna.js'
import Nama from './Nama.js'
import Pass from './Pass.js'
const RootAkun = createStackNavigator({

    Profil: {
        screen: Profilpengguna,

    },
    Nama: {
        screen: Nama
    },
    Pass: {
        screen: Pass
    },
}
);
export default createAppContainer(RootAkun);

import React from "react";
import{ createAppContainer } from "react-navigation";
import{ createStackNavigator } from "react-navigation-stack";
import ProfilToko from './Pengaturan/Akun/ProfilToko'
import EditProfilToko from './Pengaturan/Akun/EditProfilToko'
const AppNavigator = createStackNavigator({
    
    ProfilToko:{
        screen: ProfilToko
    },
    EditProfilToko:{
        screen : EditProfilToko
    }

}
);
export default createAppContainer(AppNavigator);
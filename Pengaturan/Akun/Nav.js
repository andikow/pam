import React from "react";
import{ createAppContainer } from "react-navigation";
import{ createStackNavigator } from "react-navigation-stack";
import DaftaradminComponent from './Pengaturan/Akun/Daftaradmin'
import TambahadminComponent from './Pengaturan/Akun/Tambahadmin'

const AppNavigator = createStackNavigator({
    
    Daftaradmin:{
        screen: DaftaradminComponent
    },
    Tambahadmin:{
        screen: TambahadminComponent
    }
}
);
export default createAppContainer(AppNavigator);
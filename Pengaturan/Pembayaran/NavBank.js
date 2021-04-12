import React from "react";
import{ createAppContainer } from "react-navigation";
import{ createStackNavigator } from "react-navigation-stack";
import TfBankComponent from './Pengaturan/Pembayaran/TfBank'
import TambahAkunBankComponent from './Pengaturan/Pembayaran/TambahAkunBank'
import CashComponent from './Pengaturan/Pembayaran/Cash'

const AppNavigator = createStackNavigator({
    
    TfBank:{
        screen: TfBankComponent
    },
    TambahAkunBank:{
        screen: TambahAkunBankComponent
    }
}
);
const Cash = createStackNavigator({
    
    Cash:{
        screen: CashComponent
    },
}
);
export default createAppContainer(AppNavigator);
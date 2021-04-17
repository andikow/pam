import React from "react";
import{ createAppContainer } from "react-navigation";
import{ createStackNavigator } from "react-navigation-stack";
import TfBank from './TfBank.js'
import TambahAkunBank from './TambahAkunBank.js'
import Cash from './Cash.js'

const AppNavigator = createStackNavigator({

    TfBank:{
        screen: TfBank
    },
    TambahAkunBank:{
        screen: TambahAkunBank
    },
    Cash:{
      screen: Cash
    },
}
);
export default createAppContainer(AppNavigator);

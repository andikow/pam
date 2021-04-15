import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import LaporanComponent from './transaksi/Laporan/Laporan'

const AppNavigator = createStackNavigator({
  Laporan: {
    screen: LaporanComponent
  }
});

export default createAppContainer(AppNavigator);
// /**
// * @format
// */
// import React, {Component} from 'react';
// import {AppRegistry} from 'react-native';
// import { Container, Header, Button, StyleProvider } from 'native-base';
// import CetakLabelKirim from './screen/CetakLabelKirim.js';
// import DetailTransaksi from './screen/detailtransaksi.js';
// import Login from './screen/Login.js';
// import Mulai from './screen/Mulai.js';
// import Navigasi from './screen/Navigasi.js';
// import OpsiEkspedisi from './assets/components/OpsiEkspedisi.js';
// import OpsiLayanan from './assets/components/OpsiLayanan.js';
// import PasswordBaru from './screen/PasswordBaru.js';
// import StatTransaksi from './screen/statTransaksi.js';
// import AppNavigator from './transaksi/Laporan/RootApp.js';
// import MainScreenNavigator from './transaksi/Status/TobTab.js';
// import Sidebar from './SideBar/Sidebar.js';
// import getTheme from './native-base-theme/components';
// import material from './native-base-theme/variables/material.js';
// import {name as appName} from './app.json';
// export default class App extends Component {
//   render() {
//     return (
//       <>
//       <StyleProvider style={getTheme(material)}>
//         <Container>
//           <StatTransaksi />
//         </Container>
//       </StyleProvider >
//       </>
//     );
//   }
// }
// AppRegistry.registerComponent(appName, () => Navigasi);


import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import { Container, Header, Button, StyleProvider } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material.js';
import {name as appName} from './app.json';
import RootPengaturan from './Pengaturan/RootPengaturan';
import MenuBar from './SideBar/MenuBar';
import MenuPengiriman from './Pengiriman/MenuPengiriman';
import MenuPengaturan from './Pengaturan/MenuPengaturan';
import RootApp from './RootApp';
export default class App extends Component {
  render() {
    return (
      <>
      <StyleProvider style={getTheme(material)}>
        <Container>
          <StatTransaksi />
        </Container>
      </StyleProvider >
      </>
    );
  }
}
AppRegistry.registerComponent(appName, () => RootApp);

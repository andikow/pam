/**
* @format
*/
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import { Container, Header, Button, StyleProvider } from 'native-base';
import CetakLabelKirim from './screen/CetakLabelKirim.js';
import DetailTransaksi from './screen/detailtransaksi.js';
import TambahTransaksi from './screen/TambahTransaksi.js';
import Login from './screen/Login.js';
import Mulai from './screen/Mulai.js';
import Navigasi from './screen/Navigasi.js';
import OpsiEkspedisi from './assets/components/OpsiEkspedisi.js';
import OpsiLayanan from './assets/components/OpsiLayanan.js';
import PasswordBaru from './screen/PasswordBaru.js';
import StatTransaksi from './screen/statTransaksi.js';
import AppNavigator from './transaksi/Laporan/RootApp.js';
import MainScreenNavigator from './transaksi/Status/TobTab.js';
import Sidebar from './SideBar/Sidebar.js';
import Daftaradmin from './Pengaturan/Akun/Daftaradmin.js';
import Nama from './Pengaturan/Akun/Nama.js';
import Pass from './Pengaturan/Akun/Pass.js';
import Profilpengguna from './Pengaturan/Akun/Profilpengguna.js';
import Tambahadmin from './Pengaturan/Akun/Tambahadmin.js';
import Cash from './Pengaturan/Pembayaran/Cash.js';
import NavBank from './Pengaturan/Pembayaran/NavBank.js';
import TambahAkunBank from './Pengaturan/Pembayaran/TambahAkunBank.js';
import TfBank from './Pengaturan/Pembayaran/TfBank.js';
import AsalPengiriman from './Pengaturan/AsalPengiriman.js';
import Ekspedisi from './Pengaturan/Ekspedisi.js';
import MenuPengaturan from './Pengaturan/MenuPengaturan.js';
import CekOngkir from './Pengiriman/CekOngkir.js';
import CekOngkirDetail from './Pengiriman/CekOngkirDetail.js';
import MenuPengiriman from './Pengiriman/MenuPengiriman.js';
import BerhasilBuatAkun from './screen/BerhasilBuatAkun.js';
import CekAkun from './screen/CekAkun.js';
import DaftarAkun from './screen/DaftarAkun.js';
import RootPengaturan from './Pengaturan/RootPengaturan.js';
import RootApp from './Pengaturan/Akun/RootApp.js';
import RootPengiriman from './Pengiriman/RootPengiriman.js';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material.js';
import {name as appName} from './app.json';
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
AppRegistry.registerComponent(appName, () => Pass
);

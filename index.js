/**
* @format
*/
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import { Container, Header, Button, StyleProvider } from 'native-base';
import CetakLabelKirim from './screen/CetakLabelKirim';
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
AppRegistry.registerComponent(appName, () => CetakLabelKirim);

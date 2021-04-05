import React, { Component } from 'react';
import { Container, Header, Button, StyleProvider, Content, Form, Item, Input, Icon } from 'native-base';
// import getTheme from './../native-base-theme/components';
// import material from './../native-base-theme/variables/material.js';
import { Picker } from '@react-native-picker/picker';
import {
  Text,
  StyleSheet,
  Dimensions
} from 'react-native';

import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;
const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["Rainy Days"] // optional
};
const chartConfig = {
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};

export default class StatTransaksi extends Component {
  constructor(props) {
     super(props);
     this.state = {
       selected: "key1"
     };
   }
   onValueChange(value: string) {
     this.setState({
       selected: value
     });
   }
   render() {
     return (
       <Container>
         <Header />
         <Content>
           <Form>
             <Picker
               mode="dropdown"
               iosHeader="Select your SIM"
               iosIcon={<Icon name="arrow-down" />}
               style={{ width: undefined }}
               selectedValue={this.state.selected}
               onValueChange={this.onValueChange.bind(this)}
             >
               <Picker.Item label="Wallet" value="key0" />
               <Picker.Item label="ATM Card" value="key1" />
               <Picker.Item label="Debit Card" value="key2" />
               <Picker.Item label="Credit Card" value="key3" />
               <Picker.Item label="Net Banking" value="key4" />
             </Picker>
           </Form>
           <Icon name="tumblr" />
           <LineChart
           data={data}
           width={screenWidth}
           height={220}
           chartConfig={chartConfig}
           />
         </Content>
       </Container>
     );
   }
};


const styles = StyleSheet.create({
  title: {
    fontSize: 11,
    color: '#A0A0A0',
    backgroundColor: '#F8F8F9',
    padding: 5,
  },
  icon: {
    height: 70,
    width: 70,
  },
  judul: {
    fontSize: 11,
    color: '#A0A0A0',
    height: 35,
    padding: 5,
  },
  data: {
    fontSize: 13,
    height: 35,
    padding: 5,
  },
});

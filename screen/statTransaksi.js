import React, { Component } from 'react';
import { Container, Header, Button, StyleProvider, Content, Form, Item, Input, Left, Body, Title, Text } from 'native-base';
import getTheme from './../native-base-theme/components';
import material from './../native-base-theme/variables/material.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import EIcon from 'react-native-vector-icons/Entypo';
import MCIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Picker } from '@react-native-picker/picker';
import { Col, Row, Grid } from "react-native-easy-grid";
import {
  StyleSheet,
  Dimensions,
  View
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
  labels: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN"],
  datasets: [
    {
      data: [20000, 45000, 28000, 80000, 99000, 62000],
      color: (opacity = 1) => `#6D73B5`, // optional
      strokeWidth: 2// optional
    }
  ],
  legend: ["Penjualan"] // optional
};
const chartConfig = {
  backgroundGradientFrom: "#fff",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#fff",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `#A0A0A0`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
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
       {/* <Header>
        <Left>
          <Button transparent>
            <MCIcon name='menu' size ={26} color="#fff"/>
          </Button>
        </Left>
        <Body>
          <Title style={styles.title}>Statistik Toko</Title>
        </Body>
      </Header> */}
      <Grid>
        <Text style={styles.segmentTitle}>STATISTIK TRANSAKSI</Text>
        <Row size={50}>
            <Content>
            <Form>
              <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
              >
                <Picker.Item label="Hari Ini" value="key0" />
                <Picker.Item label="7 Hari Terakhir" value="key1" />
                <Picker.Item label="30 Hari Terakhir" value="key2" />
                <Picker.Item label="90 Hari Terakhir" value="key3" />
                <Picker.Item label="12 Bulan Terakhir" value="key4" />
              </Picker>
            </Form>
            <LineChart
            data={data}
            width={screenWidth}
            height={220}
            chartConfig={chartConfig}
            bezier
            />
            </Content>
        </Row>
        <Row size={20} style={styles.datacontainerrow}>
          <Col size={5} style={styles.datacontainer}>
            <Row><EIcon name='dot-single' size ={40} color="blue"/><Text style={styles.dataheader}>OMSET PENJUALAN (RP)</Text></Row>
            <Row><Text style={styles.datadetail}>68.950</Text></Row>
            <Row>
              <Col size={2}><Text style={styles.datadetailpercent}>+100%</Text></Col>
              <Col size={7}>
                <Row>
                  <Text style={styles.detailtext}>VS 7 HARI</Text>
                </Row>
                <Row>
                  <Text style={styles.detailtext}>SEBELUMNYA</Text>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col size={4}>
            <Row><EIcon name='dot-single' size ={40} color="#DE734E"/><Text style={styles.dataheader}>TRANSAKSI MASUK</Text></Row>
            <Row><Text style={styles.datadetail}>7</Text></Row>
            <Row>
              <Col size={2}><Text style={styles.datadetailpercent}>+100%</Text></Col>
              <Col size={5}>
                <Row>
                  <Text style={styles.detailtext}>VS 7 HARI</Text>
                </Row>
                <Row>
                  <Text style={styles.detailtext}>SEBELUMNYA</Text>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
        <Text style={styles.segmentTitle}>STATUS TRANSAKSI</Text>
        <Row size={45}>
          <Col size={1}>
            <Text style={styles.segmentHeading}>SUDAH DIBAYAR</Text>
            <Text style={styles.content}>4</Text>
          </Col>
          <Col>
            <Text style={styles.segmentHeading}>BELUM DIBAYAR</Text>
            <Text style={styles.content}>2</Text>
          </Col>
          <Col>
            <Text style={styles.segmentHeading}>DIBATALKAN</Text>
            <Text style={styles.content}>1</Text>
          </Col>
        </Row>
      </Grid>
       </Container>
     );
   }
};


const styles = StyleSheet.create({
  title: {
    marginLeft:-70
  },
  content: {
    fontSize: 18,
    color: '#000',
    padding: 5,
  },
  segmentTitle: {
    fontSize: 11,
    color: '#A0A0A0',
    backgroundColor: '#F8F8F9',
    padding: 5,
  },
  segmentHeading: {
    fontSize: 11,
    color: '#A0A0A0',
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
  dataheader: {
    padding:10,
    fontSize:12
  },
  datadetail: {
    paddingLeft:15,
    paddingTop:10,
    paddingBottom:10,
    fontSize:14,
    fontWeight:"bold"
  },
  datadetailpercent: {
    paddingLeft:15,
    paddingTop:10,
    paddingBottom:10,
    fontSize:10,
    color: "#6D73B5",
    fontWeight: "bold"
  },
  datacontainer: {
    borderRightWidth: StyleSheet.hairlineWidth,
    borderColor:"#A0A0A0",
  },
  datacontainerrow: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor:"#A0A0A0",
  },
  detailtext: {
    fontSize: 10,
    color: '#A0A0A0',
  },
});

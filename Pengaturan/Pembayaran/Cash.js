import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, ToastAndroid} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {Col, Row, Grid} from "react-native-easy-grid";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      alignItems : 'center',
      position: 'relative',

    },
    text:{
        marginLeft:20,
        marginRight:20,
        color:'#696969',
        marginTop: 10,
        fontSize:16,
        justifyContent: 'center',
    },
    text1:{
        marginLeft:20,
        marginRight:20,
        color:'#0936ff',
        marginTop: 250,
        fontSize:14,
        justifyContent: 'center',
    },
    icon:{
        marginTop: 170,
    }
  });

export default class Cash extends Component {
    static navigationOptions = ({navigation})=>{
        return {
            title : 'Cash',
            headerStyle : {
                backgroundColor : '#6d73b5'
            },
            headerTintColor : '#fff',
            headerTitleStyle : {
                fontSize : 18
            },

        }

}
    state ={
        toggled: false
    }
    toggleSwitch = (value) => {
        this.setState({toggled : value})
    }
    render(){
        return (
            <ScrollView>
            <View style={styles.container}>
            <Grid style={{marginTop: 15}}>
                <Col>
                <Text style={{marginLeft: 10}}>Aktifkan Pembayaran Cash</Text>
                </Col>
                <Col>
                <Switch onValueChange={this.toggleSwitch} value={this.state.toggled } style={{marginRight:10}}
                ></Switch>
                </Col>
            </Grid>
            </View>
            </ScrollView>
        );
    };
};

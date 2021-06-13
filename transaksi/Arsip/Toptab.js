import React from "react";
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {View} from 'react-native';
import {Col, grow, Grid} from "react-native-easy-grid";
import Selesai from './selesai'
import Batal from './batal'

const TopTab = createMaterialTopTabNavigator({
    SelesaiComponent : {
        screen : Selesai,
        navigationOptions : {
            tabBarLabel : 'Selesai'
        }
    },
    BatalComponent : {
        screen : Batal,
        navigationOptions : {
            tabBarLabel : 'Batal'
        }
    }
},{
    tabBarOptions : {
        tabStyle : {
            backgroundColor : '#6D73B5',
            maxWidth: 200
        }
    }
})

const Arsip = createStackNavigator({
    TopTab: {
        screen: TopTab,
        navigationOptions: {
            headerShown:false

            // title: 'Status Transaksi',
            // headerStyle: {
            //     backgroundColor: '#6D73B5',
            // },
            // headerTitleStyle : {
            //     color : '#fff',
            //     paddingLeft : 40
            // },
            // headerRight : (
            //     <Grid>
            //         <Col>
            //         <View style={{paddingRight: 8, paddingTop: 18}}>
            //                 <Ionicons
            //                     name= "md-search"
            //                     size={20}
            //                     color ="white"
            //                     onPress={() =>{
            //                         console.log('Search')
            //                     }}
            //                 />
            //         </View>
            //         </Col>
            //     </Grid>
            // )
        },
    },
});

export default createAppContainer(Arsip);

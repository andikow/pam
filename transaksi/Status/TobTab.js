import React from "react";
import { createAppContainer } from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'
import {View} from 'react-native';
import {Col, grow, Grid} from "react-native-easy-grid";
import Belumbyr from './Belumbyr'
import Sudahbyr from './Sudahbyr'
import Siapkrm from './Siapkrm'
import Dikirim from './Dikirim'

const TopTab = createMaterialTopTabNavigator({
    BelumbyrComponent : {
        screen : Belumbyr,
        navigationOptions : {
            tabBarLabel : 'Belum Bayar'
        }
    },
    SudahbyrComponent : {
        screen : Sudahbyr,
        navigationOptions : {
            tabBarLabel : 'Sudah Bayar'
        }
    },
    SiapkrmComponent : {
        screen : Siapkrm,
        navigationOptions : {
            tabBarLabel : 'Siap Kirim'
        }
    },
    DikirimComponent : {
        screen : Dikirim,
        navigationOptions : {
            tabBarLabel : 'Di Kirim'
        }
    }
},{
    tabBarOptions : {
        tabStyle : {
            backgroundColor : '#6D73B5',
            flexWrap: 'nowrap',
            width:'auto'
        }
    }
})

const MainScreenNavigator = createStackNavigator({
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
            //         <Col>
            //         <View style={{paddingTop: 18}}>
            //         <Ionicons
            //                 name= "md-filter"
            //                 size={20}
            //                 color ="white"
            //                 paddingLeft
            //                 onPress={() =>{
            //                     console.log('Search')
            //                 }}
            //             />
            //         </View>
            //         </Col>
            //     </Grid>
            // )
        },
    },
});

export default createAppContainer(MainScreenNavigator);

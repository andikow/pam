import React from "react"; 
import { createAppContainer } from "react-navigation"; 
import { createStackNavigator } from "react-navigation-stack";
import MulaiComponent from './Mulai'
import LoginComponent from './Login' 
import PasswordBaruComponent from './PasswordBaru'
import BuatAkunBaruComponent from './BuatAkunBaru'
import VerifikasiComponent from './Verifikasi'
import PasswordComponent from './Password'



const AppNavigator = createStackNavigator({ 
    Mulai : {
        screen : MulaiComponent
        },

    Login : {
        screen : LoginComponent
        }, 

    BuatAkunBaru : {
        screen : BuatAkunBaruComponent
        }, 
    
    Verifikasi : {
        screen : VerifikasiComponent
            },     

    Password : {
        screen : PasswordComponent
            },  

    PasswordBaru : { 
        screen : PasswordBaruComponent }
    })

export default createAppContainer(AppNavigator);
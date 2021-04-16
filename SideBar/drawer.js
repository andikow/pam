import React, { Component } from 'react';
import { View } from 'react-native';
import { Card, Drawer, CardItem, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';
import SideBar from './Sidebar';


export default class drawer extends Component {
    static navigationOptions = {
        header:null
        
    }
    closeDrawer() {
        this._drawer._root.close()
    };
    openDrawer() {
        this._drawer._root.open()
    };

    render() {
        return (
            <Drawer
                ref={(ref) => { this._drawer = ref; }}
                content={<SideBar navigator={this.navigator} />}
                onClose={() => this.closeDrawer()} >
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={()=>this.openDrawer()}>
                            <Icon name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Tutorial Drawer</Title>
                    </Body>
                    <Right />
                </Header>
                
            </Container>
            </Drawer>
        );
    }
}
import React, { Component } from 'react';
import { View, StatusBar, Navigator, Text } from 'react-native';

import LogIn from '../components/LogIn/LogIn';
import Main from '../components/Main/Main';
import GetTokenApi from '../Api/GetTokenApi';
import global from './global';

StatusBar.setHidden(true);

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isFristScr: 'LOGIN',
        };
        GetTokenApi()
            .then(resJSON => {
                console.log(resJSON)
                if (resJSON) {
                    console.log('co resJSON')
                    this.setState({
                        isFristScr: 'MAIN' ,
                    })
                }
            })
            .catch(err => console.log(err))
    }
    render() {
        const { isFristScr } = this.state;

        console.log('trang thai bay gio cua state:', isFristScr)
        return (
            <Navigator
             initialRoute={{ name: 'LOGIN' }}
            //initialRoute={{ name: 'LOGIN' }}
            renderScene={(route, navigator) => {
                console.log('trong JSX:',route.name.isFristScr)
                switch (route.name) {
                    case 'LOGIN': return <LogIn navigator={navigator} />;                    
                    default: return <Main navigator={navigator} />;
                }
            }}
            />
        );
    }
}
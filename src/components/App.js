import React, { Component } from 'react';
import { View, StatusBar, Navigator ,Text} from 'react-native';

 import LogIn from '../components/LogIn/LogIn';
 import Main from '../components/Main/Main';
 import GetTokenApi from '../Api/GetTokenApi';

StatusBar.setHidden(true);

export default class App extends Component {
    
    componentDidMount() {
        GetTokenApi()
        .then(resJSON => console.log(resJSON))
        .catch(err=> console.log(err))
    }
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'LOGIN' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'LOGIN': return <LogIn navigator={navigator} />;
                        default: return <Main navigator={navigator} user= {route.user}/>

                    }
                }}
            />
        );
    }
}
import React, { Component } from 'react';
import {
    View, Text, TouchableOpacity, Dimensions,
    StyleSheet, Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Home from './Home/Home';
import Drink from './Drink/Drink';
import Info from './Info/Info';
import Staff from './Staff/Staff';
import Header from './Header';

import getDrinkApi from '../../Api/getDrinkApi';
import GetTokenApi from '../../Api/GetTokenApi';
import initDataProfile from '../../Api/initDataProfile';

const { height } = Dimensions.get('window');

import Homei from '../../media/Tab/home.png';
import Drinki from '../../media/Tab/drink.png';
import Staffi from '../../media/Tab/staff.png';
import Contacti from '../../media/Tab/contact.png';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            token: null,
            user: [],
            drinks: []
        };
        GetTokenApi()
            .then(res => {
                this.setState({
                    token: res
                })
                console.log('token trong construc main:', this.state.token)
                initDataProfile(this.state.token)
                    .then(res => {
                        this.setState({
                            user: res.user,
                        })
                        console.log('thong tin nguoi dung:', this.state.user.user_shop_id)
                        const { token } = this.state;
                        const { user_shop_id } = this.state.user;
                        console.log('token va ma shop:', token, user_shop_id)
                        getDrinkApi(token, user_shop_id)
                            .then(resJSON => {
                                this.setState({
                                    drinks: resJSON.drinks,
                                })
                            })
                            .catch(err => console.log(err));
                    })
                    .catch(err => console.log(err))
            })
            .catch(err => console.log('Loi lay du token o Main'))
        console.log(this.state.token)
    }
    render() {
        const { token } = this.state;
        console.log(token)

        const { iconStyle } = styles;
        const { navigator } = this.props;
        const { types, selectedTab, topProducts, cartArray,drinks } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#DBDBD8' }}>
                <Header />
                <TabNavigator>
                    <TabNavigator.Item
                        selected={selectedTab === 'Home'}
                        title="Home"
                        onPress={() => this.setState({ selectedTab: 'Home' })}
                        renderIcon={() => <Image source={Homei} style={iconStyle} />}
                        //renderSelectedIcon={() => <Image source={homeIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Home types={types} topProducts={topProducts} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Staff'}
                        title="Staff"
                        onPress={() => this.setState({ selectedTab: 'Staff' })}
                        renderIcon={() => <Image source={Staffi} style={iconStyle} />}
                        //renderSelectedIcon={() => <Image source={cartIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Staff cartArray={cartArray} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Drink'}
                        title="Drink"
                        onPress={() => this.setState({ selectedTab: 'Drink' })}
                        renderIcon={() => <Image source={Drinki} style={iconStyle} />}
                        //renderSelectedIcon={() => <Image source={searchIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Drink drinks={drinks} />
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={selectedTab === 'Info'}
                        title="Info"
                        onPress={() => this.setState({ selectedTab: 'Info' })}
                        renderIcon={() => <Image source={Contacti} style={iconStyle} />}
                        //renderSelectedIcon={() => <Image source={contactIconS} style={iconStyle} />}
                        selectedTitleStyle={{ color: '#34B089', fontFamily: 'Avenir' }}
                    >
                        <Info navigator={navigator} />
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    iconStyle: {
        width: 20, height: 20
    }
});

export default Main;  
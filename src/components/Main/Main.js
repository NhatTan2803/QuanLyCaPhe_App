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

//import initData from '../../../api/initData';


// import homeIconS from '../../../media/appIcon/home.png';
// import homeIcon from '../../../media/appIcon/home0.png';
// import cartIconS from '../../../media/appIcon/cart.png';
// import cartIcon from '../../../media/appIcon/cart0.png';
// import searchIconS from '../../../media/appIcon/search.png';
// import searchIcon from '../../../media/appIcon/search0.png';
// import contactIconS from '../../../media/appIcon/contact.png';
// import contactIcon from '../../../media/appIcon/contact0.png';


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Home',
            types: [],
            token: null,
            user: [],
            topProducts: [],
            cartArray: []
        };
        GetTokenApi()
            .then(res => {
                this.setState({
                    token: res
                })
                console.log('token trong construc main:', this.state.token)
            })
            .catch(err => console.log('Loi lay du token o Main'))
        console.log(this.state.token)


    }
    componentDidMount() {

        // initData()
        //     .then(resJSON => {
        //         const { type, product } = resJSON
        //         this.setState({
        //             types: type,
        //             topProducts: product,

        //         })
        //     });
        const { token,user } = this.state;

        // initDataProfile(token)
        // .then(res=>{
        //     // this.setState({
        //     //     user:res.user,
        //     // })
        //     // console.log('profole nguoi dung trong construc main khoi tao profile:',this.state.user)
        //     console.log('profile nguoi dung:',res)
        // })
        initDataProfile()
            .then(res => {
                this.setState({
                    user: res.user,
                })
            })
            .catch(err => console.log(err))

        getDrinkApi(token,user.user_shop_id )
            .then(resJSON => console.log('du lieu sau khi get:', resJSON.drinks))
            .catch(err => console.log(err));
    }

    render() {
        const {token} = this.state;
        console.log(token)
        
        const { iconStyle } = styles;
        const { navigator } = this.props;
        const { types, selectedTab, topProducts, cartArray } = this.state;
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
                        badgeText={cartArray.length}
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
                        <Drink />
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
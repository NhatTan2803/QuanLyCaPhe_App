
import React, { Component } from 'react';
import { Navigator } from 'react-native';

import StaffView from './StaffView';
import ListDrink from '../Drink/ListDrink/ListDrink';
import DetailDrink from '../Drink/DetailDrink/DetailDrink';

class Staff extends Component {
    render() {
        const {staffs} = this.props;
        return (
            <Navigator
                initialRoute={{ name: 'STAFF_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'STAFF_VIEW': return <StaffView navigator={navigator}  staffs={staffs}/>;
                        default: return <DetailDrink navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

export default Staff;
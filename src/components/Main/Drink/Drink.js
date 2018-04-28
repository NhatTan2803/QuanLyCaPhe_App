
import React, { Component } from 'react';
import { Navigator } from 'react-native';

import DrinkView from './DrinkView';
import ListDrink from '../Drink/ListDrink/ListDrink';
import DetailDrink from '../Drink/DetailDrink/DetailDrink';

class Drink extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{ name: 'DRINK_VIEW' }}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'DRINK_VIEW': return <DrinkView navigator={navigator} drink={drink}/>;
                        default: return <DetailDrink navigator={navigator} />;
                    }
                }}
            />
        );
    }
}

export default Drink;
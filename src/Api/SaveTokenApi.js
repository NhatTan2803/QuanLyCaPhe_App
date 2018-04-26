import { AsyncStorage } from 'react-native';

const SaveTokenApi = async (token) => {
    try {
        await AsyncStorage.setItem('@token', token);
        console.log('luu thanh cong token')

        console.log(AsyncStorage.getItem('@token'))
    } catch (e) {
        return e;
    }
}

export default SaveTokenApi;
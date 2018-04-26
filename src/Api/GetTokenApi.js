import { AsyncStorage } from 'react-native';

const GetTokenApi = async () => {
    try {
        const value = await AsyncStorage.getItem('@token');
        console.log(value)
        if (value != null)
            return value
    } catch (error) {
        return '';
    }
}
export default GetTokenApi;
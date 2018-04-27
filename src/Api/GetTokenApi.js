import { AsyncStorage } from 'react-native';

const GetTokenApi = async () => {
    try {
        const value = await AsyncStorage.getItem('@token');
        if (value != null)
            return value
    } catch (error) {
        return '';
    }
}
export default GetTokenApi;
import { StyleSheet } from 'react-native';
import { useFonts } from '@use-expo/font';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    logo: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    sloganContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },

    slogan: {
        fontSize: 24,
        fontWeight: 'bold'
    },

    btn: {
        borderColor: '#141414',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#141414'
    }
});

export default Styles;
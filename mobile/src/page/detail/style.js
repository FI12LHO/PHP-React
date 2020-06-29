import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginVertical: 10,
        padding: 20
    },

    tag: {
        flexDirection: 'column'
    },

    content: {
        flexDirection: 'column'
    },

    tagText: {
        color: '#000000',
        fontSize: 20,
        marginVertical: 10,
        textTransform: 'capitalize'
    },

    contentText:{
        color: '#00000090',
        fontSize: 20,
        marginVertical: 10,
        textTransform: 'capitalize'
    },
});

export default Styles;
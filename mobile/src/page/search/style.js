import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },

    action: {
        flexDirection: 'row',
        marginVertical: 5,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        flex: 1,
        borderBottomWidth: 1,
        borderColor: '#141414',
        marginRight: 5,
        paddingLeft: 5,
        fontSize: 18
    },

    btnSearch: {
        borderColor: '#141414',
        borderWidth: 1,
        padding: 10,
        backgroundColor: '#141414'
    },

    list: {
        marginBottom: 5,
        paddingVertical: 10,
    },

    dataContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        borderTopWidth: 2,
        borderBottomWidth: 2,
        borderColor: '#14141420',
        marginVertical: 10,
        padding: 20
    },

    content: {
        flexDirection: 'column'
    },

    tagText: {
        color: '#000000',
        fontSize: 16,
        textTransform: 'capitalize'
    },

    contentText:{
        color: '#00000090',
        fontSize: 16,
        textTransform: 'capitalize'
    },

    detail: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Styles;
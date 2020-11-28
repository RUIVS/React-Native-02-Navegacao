import { StyleSheet } from 'react-native';

const estiloLogin = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borda: {
        backgroundColor: '#081a31',
        height: 230,
        width: '80%',
        borderRadius: 10
    },
    texto: {
        fontSize: 20,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 10
    },
    campo: {
        backgroundColor: '#dcedff',
        fontSize: 18,
        marginLeft: 40,
        marginRight: 40,
        marginTop: 5,
        borderRadius: 5,
        height: 40,
        paddingLeft: 10
    },
    botaoContainer: {
        marginTop: 15,
        marginBottom: 20,
        marginLeft: 35,
        marginRight: 35,
        borderRadius: 5,
        height: 40,
        borderWidth: 2,
        borderColor: '#e8f2e9',
        backgroundColor: '#14417b',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoTexto: {
        fontSize: 18,
        color: '#FFFFFF',
        fontWeight: 'bold'
    }
});
export default estiloLogin;
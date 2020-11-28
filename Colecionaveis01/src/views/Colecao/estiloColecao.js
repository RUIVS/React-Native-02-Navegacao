import { StyleSheet } from 'react-native';

const estiloColecao = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    borda: {
        backgroundColor: '#081a31',
        height: '28%',
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
export default estiloColecao;
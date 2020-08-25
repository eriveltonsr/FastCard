

import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Text,
    TouchableOpacity,
    StatusBar,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';

import logoCard from '../../assets/image/logoCard.png';
import logoVisa from '../../assets/image/visa.png'


function AddCard({navigation }) {



    return (

        <SafeAreaView style={styles.container} >
            < KeyboardAvoidingView behavior={'padding'}>


                <ScrollView>

                    <View style={{ padding: 29 }}>
                        <View style={styles.card} >
                            <View style={[styles.flexRow, { paddingBottom: 18, }]}>
                                <View >
                                    <Image source={logoCard}>

                                    </Image>
                                </View>

                                <View>
                                    <Image source={logoVisa}>

                                    </Image>
                                </View>

                            </View>

                            <Text style={styles.textoCard} >
                                Erivelton Rodrigues
                                </Text>
                            <Text style={styles.textoCard} >
                                1234 5678 908
                                </Text>

                        </View>
                    </View>

                    <View style={{ padding: 36, }}>
                        <Text>
                            Nome Completo
                        </Text>
                        <TextInput style={styles.campoTexto}>

                        </TextInput>

                        <Text>
                            Número Cartão
                        </Text>
                        <TextInput style={styles.campoTexto}>

                        </TextInput>

                        <View style={[styles.flexRow]}>
                            <View >
                                <Text>Vencimento </Text>
                            </View>

                            <View style={{ width: 100 }}>
                                <Text> Cvv </Text>
                            </View>



                        </View>


                        <View style={[styles.flexRow]}>

                            <View style={{ width: 100 }}>
                                <TextInput style={styles.campoTexto}>

                                </TextInput>
                            </View>

                            <View style={{ width: 100 }} >
                                <TextInput style={styles.campoTexto}>

                                </TextInput>
                            </View>



                        </View>


                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>navigation.navigate('MainScreen')}
                            
                        >
                            <Text style={{ color:'#fff',fontSize:18,}}>Adicionar Cartão!</Text>
                        </TouchableOpacity>
                    </View>

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>



    )

}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: 50,

    },

    flexRow: {
        flexDirection: "row",
        justifyContent: 'space-between',


    },

    card: {
        backgroundColor: "#0F151D",
        width: '100%',
        height: 135,
        borderRadius: 10,
        padding: 32,
    },

    containerRow: {
        justifyContent: "center",
        flexDirection: "row",
        flexWrap: 'wrap',
        marginTop: 30,
    },

    texto: {
        fontSize: 30,
        color: "#0D1724",
        paddingRight: 5,

    },


    textoCard: {
        fontSize: 14,
        color: "#fff",
    },

    textoBold: {
        fontSize: 30,
        color: "#0D1724",

        fontWeight: "bold"
    },


    campoTexto: {
        borderColor: '#CFD1D3',
        borderBottomWidth: 1,
        height: 31,
        alignItems: "center",
        marginBottom: 13,
        borderRadius: 10,
        width: '100%',
    }
    ,
    button: {

        backgroundColor: '#0F151D',
        height: 55,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 37,
        elevation: 2
    }

});

export default AddCard;

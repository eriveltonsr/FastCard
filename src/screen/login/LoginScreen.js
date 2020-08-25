
import React, { useState, } from 'react';
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





import car from '../../assets/image/carro.png'

function LoginScreen({navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    return (

        <SafeAreaView style={styles.container} >
            < KeyboardAvoidingView  behavior={Platform.OS == "ios" ? "padding" : "null"}>
            

            <ScrollView>
           

           
                <View style={styles.header} >
                    <Image source={car}></Image>
                </View>

                <View >


                    <View style={styles.containerRow} >
                        <Text style={styles.texto}>
                            Bem vindo ao
                    </Text>

                        <Text style={styles.textoBold}>
                            FastCar
               </Text>

                    </View>


                    <View style={{ padding: 37, }} >

                        <Text style={{ marginStart: 10, fontSize: 14, color: "black", marginBottom: 5 }}>
                            E-mail:

                         </Text>
                        <TextInput style={styles.campoTexto}></TextInput>


                        <Text style={{ marginStart: 10, fontSize: 14, color: "black", marginBottom: 5 }}>
                            E-mail:

                        </Text>
                        <TextInput style={styles.campoTexto}></TextInput>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={()=>navigation.navigate('AddCard')}
                            
                        >
                        <Text style={{ color:'#fff',fontSize:18,}}>Vamos lá!</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{alignItems:"center",}}>
                            <Text style={{ color:'#000000',fontSize:18,marginTop:18}}>ou Cadastra-se</Text>
                        </TouchableOpacity>

                    </View>
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

    },
    header: {
        backgroundColor: "#0F151D",
        width: '100%',
        height: 215,
        borderBottomLeftRadius: 80,
        borderBottomRightRadius: 80,
        justifyContent: "center",
        alignItems: "center",

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
    textoBold: {
        fontSize: 30,
        color: "#0D1724",

        fontWeight: "bold"
    },


    campoTexto: {
        borderColor: '#CFD1D3',
        borderWidth: 2,
        height: 55,
        alignItems: "center",
        marginBottom: 13,
        borderRadius: 10,
    }
    ,
    button:{
        
        backgroundColor:'#0F151D',
        height:55,
        borderRadius:10,
        justifyContent:"center",
        alignItems:"center",
        marginTop:37,
        elevation: 2
    }

});

export default LoginScreen;

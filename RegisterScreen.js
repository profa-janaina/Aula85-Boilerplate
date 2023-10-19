import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { RFValue } from "react-native-responsive-fontsize";

import {auth} from "../config";
import {createUserWithEmailAndPassword} from "../config";
import { useNavigation } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

const appIcon = require("../assets/logo.png");


export default function RegisterScreen() {
  const[fontsLoaded, setFontsLoaded] = useState(false);
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[confirmPassword, setConfirmPassword] = useState("");
  const[firstName, setFirstName] = useState("");
  const[lasttName, setLasttName] = useState("");
  const navigation = useNavigation();

  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }
  
  useEffect(() =>{
  loadFontsAsync();
  })

  // CRIE O MÉTODO PARA REGISTRAR O USUÁRIO

  if (fontsLoaded) {
    SplashScreen.hideAsync();
    return (
      <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

            <Text style={styles.appTitleText}>Registrar</Text>
           
            <TextInput
              style={styles.textinput}
              onChangeText={text => setFirstName({text})}
              placeholder={"Nome"}
              placeholderTextColor={"#FFFFFF"}
    
            />
            <TextInput
              style={styles.textinput}
              onChangeText={text => setLasttName({text})}
              placeholder={"Sobrenome"}
              placeholderTextColor={"#FFFFFF"}
        
            />
            <TextInput
              style={styles.textinput}
              onChangeText={text => setEmail({text})}
              placeholder={"Digite o e-mail"}
              placeholderTextColor={"#FFFFFF"}
  
            />
            <TextInput
              style={styles.textinput}
              onChangeText={text => setPassword({text})}
              placeholder={"Digite a senha"}
              placeholderTextColor={"#FFFFFF"}
              secureTextEntry
            />

          {/* CRIE UM INPUT PARA CONFIRMAR A SENHA*/}

            <TouchableOpacity
              style={[styles.button, { marginTop: 20 }]}
              // CHAME A FUNÇÃO PARA REGISTRAR O USUÁRIO
            >
              <Text style={styles.buttonText}>Registrar</Text>
            </TouchableOpacity>    
            <TouchableOpacity
              onPress={()=>navigation.replace("Login")}
            >
              <Text style={styles.buttonTextNewUser}>Login</Text>
            </TouchableOpacity>         
        </View>  
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
    alignItems:"center",
    justifyContent:"center"
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
  },
  appIcon: {
    width: RFValue(200),
    height: RFValue(200),
    resizeMode: "contain",
    marginBottom:RFValue(20)
  },
  appTitleText: {
    color: "white",
    textAlign: "center",
    fontSize: RFValue(40),
    fontFamily: "Bubblegum-Sans",
    marginBottom:RFValue(20)
  },
  textinput: {
    width:  RFValue(250),
    height: RFValue(40),
    padding: RFValue(10),
    marginTop:RFValue(10),
    borderColor: "#FFFFFF",
    borderWidth: RFValue(4),
    borderRadius: RFValue(10),
    fontSize: RFValue(15),
    color: "#FFFFFF",
    backgroundColor: "#15193c",
    fontFamily: "Bubblegum-Sans"
  },
  button: {
    width: RFValue(250),
    height: RFValue(50),
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: RFValue(30),
    backgroundColor: "white",
    marginBottom:RFValue(20)
  },
  buttonText: {
    fontSize: RFValue(24),
    color: "#15193c",
    fontFamily: "Bubblegum-Sans"
  },
  buttonTextNewUser: {
    fontSize: RFValue(12),
    color: "#FFFFFF",
    fontFamily: "Bubblegum-Sans",
    textDecorationLine: 'underline'
  }
});
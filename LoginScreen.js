import {React, useState, useEffect} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, Platform, StatusBar, TextInput, TouchableOpacity, Alert } from 'react-native';
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import { RFValue } from "react-native-responsive-fontsize";

import {auth} from "../config";
import {signInWithEmailAndPassword} from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  'Bubblegum-Sans': require('../assets/fonts/BubblegumSans-Regular.ttf'),
};

const appIcon = require("../assets/logo.png");


export default function CreateStoryScreen() {
    const[fontsLoaded, setFontsLoaded] = useState(false);
    const[email, setEmail] = useState("");
    const[password, setPassword] = useState("");
    const[userSignedIn, SetUserSignedIn] = useState(false);
    const navigation = useNavigation();
  
  const loadFontsAsync = async () => {
    await Font.loadAsync(customFonts);
    setFontsLoaded(true);
  }
  
  useEffect(() =>{
  loadFontsAsync();
  })

  //DEFINA A FUNÇÃO SIGNIN
  
  if (fontsLoaded) {
    SplashScreen.hideAsync();
   
    return(
      <View style={styles.container}>
          <SafeAreaView style={styles.droidSafeArea} />

          <Text style={styles.appTitleText}>Narração de Histórias</Text>
          <Image source={appIcon} style={styles.appIcon} />

          <TextInput
            style={styles.textinput}
            onChangeText={text => setEmail({text})}
            placeholder={"Digite o e-mail"}
            placeholderTextColor={"#FFFFFF"}
            autoFocus
          />
          <TextInput
            style={[styles.textinput, { marginTop: 20 }]}
            onChangeText={text => setPassword({text})}
            placeholder={"Digite a senha"}
            placeholderTextColor={"#FFFFFF"}
            secureTextEntry
          />
          <TouchableOpacity
            style={[styles.button, { marginTop: 20 }]}
            // CHAME A FUNÇÃO SIGNIN
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          {/* CRIE UM BOTÃO PARA REGISTRAR USUÁRIOS */}
        </View>
    );
  }
  }const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#15193c",
      alignItems: "center",
      justifyContent: "center"
    },
    droidSafeArea: {
      marginTop: Platform.OS === "android" ? StatusBar.currentHeight : RFValue(35)
    },
    appIcon: {
      width: RFValue(200),
      height: RFValue(200),
      resizeMode: "contain",
      marginBottom: RFValue(20)
    },
    appTitleText: {
      color: "white",
      textAlign: "center",
      fontSize: RFValue(40),
      fontFamily: "Bubblegum-Sans",
      marginBottom: RFValue(20)
    },
    textinput: {
      width: RFValue(250),
      height: RFValue(50),
      padding: RFValue(10),
      borderColor: "#FFFFFF",
      borderWidth: RFValue(4),
      borderRadius: RFValue(10),
      fontSize: RFValue(20),
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
      marginBottom: RFValue(20)
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
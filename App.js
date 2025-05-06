import React, { useEffect } from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { WebView } from "react-native-webview"
import messaging from '@react-native-firebase/messaging';


const App = () => {

  async function requestUserPermission() {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  
    if (enabled) {
      console.log('Authorization status:', authStatus);
    }
  }

  const getToken = async()=>{
    const token = await messaging().getToken()
    console.log('Token =',token)
  }

  useEffect(()=>{
    requestUserPermission()
    getToken()
  },[]);
  
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri:'https://googleauthnextjs.netlify.app/'}} style={styles.webview} />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container :{
    flex:1,
  },
  webview:{
    flex:1,
  }
});

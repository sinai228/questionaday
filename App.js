import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

const image = { uri: "https://github.com/sinai228/portfolio/blob/main/assets/desk.jpg?raw=true" };

const Loading = () => {
  return (
    < View style={styles.container} >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        {/* <Image style={styles.logo} source={require("./assets/logo.png")} /> */}
        <Text style={styles.text}>A question a day {'\n'}to grow{'\n'}to nourish{'\n'}the mind, thoughts, and future.  </Text>
        <Text style={styles.text_bot}>Tap anywhere to get started...</Text>
      </ImageBackground>
    </View >
  );
};
const Home = () => {
  return (
    < View style={styles.container} >

    </View >
  );
};
export default function App() {
  return (
    <Loading />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    flex: 1,
    justifyContent: "center",
    width: '100%',
  },
  text: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',
  },
  text_bot: {
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'white',

    marginTop: '100%',
    bottom: 0, //Here is the trick
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 70,
    height: 70,
  },
});

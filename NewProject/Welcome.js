import React from 'react';
import { Image, StyleSheet, Text, ScrollView } from 'react-native';

const Welcome = () => {
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} 
      source={require('./img/LittleLemonHeader.png')}
      resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}     
        />

      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
        
      </Text>

      <Image
        style={styles.image}
        source={require('./img/LemonDrink.png')}
        resizeMode="repeat"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('./img/Picture3.png')}
        resizeMode="repeat"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('./img/LemonDrink2.png')}
        resizeMode="repeat"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
      <Image
        style={styles.image}
        source={require('./img/saladLemon.png')}
        resizeMode="cover"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  logo: {
     height: 100,
     width: 300,
     resizeMode: 'contain',
  },
  image: {
    width: 360,
    height: 440,
    borderRadius: 30,
    borderWidth:6,
    borderColor:'white',
    
  },
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor: '#fff',
  },

  title: {
    marginTop: 16,
    paddingVertical: 10,
    color: '#013220',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Welcome;
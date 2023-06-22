import React from 'react';
import { View, Image, StyleSheet, Text, ScrollView,useWindowDimensions, } from 'react-native';

const Welcome = () => {
  //const colorScheme = useColorScheme();
  const window = useWindowDimensions();
  return (
    <ScrollView style={styles.container}>


    {/* <View style={styles.headerWrapper}> */}

      <Image style={styles.logoHeader} 
      source={require('./img/LittleLemonHeader.png')}
      resizeMode="center"
        accessible={true}
        accessibilityLabel={'Little Lemon Logo'}     
        />
{''}
        {/* <Text style={styles.headerText}>Little Lemon</Text> */}
     {/* </View> */}
      {/* <Text style={styles.regularText}>
        Little Lemon is a charming neighborhood bistro that serves simple food
        and classic cocktails in a lively but casual environment. We would love
        to hear your experience with us!
      </Text> */}
      <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
      </Text>
      <Text style={styles.regular}>Window Dimensions</Text>
      <Text style={styles.regular}>Height: {window.height}</Text>
      <Text style={styles.regular}>Width: {window.width}</Text>
      <Text style={styles.regular}>Font scale: {window.fontScale}</Text>



      {/* <Text style={styles.title}>
        Little Lemon, your local Mediterranean Bistro
        
      </Text> */}
     

      {/* <Image
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
      /> */}
      
    </ScrollView>
   
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    marginTop: 25,
    backgroundColor:'white',
  },
  headerWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 10,
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 40,
    paddingBottom: 10,
    fontSize: 30,
    color: 'green',
    textAlign: 'center',
    fontWeight: 'bold',
    
  },
  regularText: {
    fontSize: 18,
    padding: 20,
    marginVertical: 8,
    color: 'black',
    textAlign: 'center',
  },
  logoHeader: {
     height: 100,
     width: 300,
     resizeMode: 'contain',
     
  },
  logoImage:{
    width: 100,
    height: 100,
    borderRadius: 20,
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
import * as React from 'react';
import{ View, StyleSheet } from'react-native';

import LittleLemonHeader from './LittleLemonHeader';
import MenuItems from './MenuItems';
import LoginScreen from './LoginScreen';

export default function App() {
    return (
      <>
    <View style={styles.container}>
            <LittleLemonHeader />
            {/* <MenuItems /> */}
            <LoginScreen/>
            
          </View>
          
     </>
     );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#333333',
      },
      footerContainer: { backgroundColor: '#333333' },
    });
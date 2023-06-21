import * as React from 'react';
import { View, Text } from 'react-native';

export default function LittleLemonHeader() {
  return (
    <View style={{ flex: 0.2, backgroundColor: '#EE9972' }}>
      <Text
        style={{ padding: 40, fontSize: 30, color: 'black', textAlign: 'center' }}
        numberOfLines={3}>
        
        <Text style={{ fontWeight: 'bold'  }}> Little Lemon</Text>{' '}
      </Text>
    </View>
  );
}
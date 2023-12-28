import React from 'react';
import { Text, View } from 'react-native';

const DefaultScreen = ({navigation, route}) => {
    return (
        <View style={styles.container}>
            <Text>Essa é a tela de {route.params.name}</Text>
        </View>
    )};

const styles = {
    container: {
      flex: 1,
      backgroundColor: '#DDD',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
export default DefaultScreen

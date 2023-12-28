import React from 'react';
import { Button,
        View,
        SafeAreaView,
        FlatList,
        Text,
        Pressable } from 'react-native';

const MenuItem = ({title, navigation}) => {
  return (
    <Pressable style={styles.item} onPress={() => navigation.navigate('Details', {name: title})}>
        <View> 
            <Text>{title}</Text>
        </View>
    </Pressable>
)}

const HomeScreen = ({navigation}) => {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          numColumns={2}
          data={[
            {key: 'Presença'},
            {key: 'Faltas'},
            {key: 'Atrasos'},
            {key: 'Sair'},
          ]}
          renderItem={({item}) => <MenuItem key={item.key} title={item.key} navigation={navigation}
          keyExtractor={item => item.key}/>}
      />
      </SafeAreaView>
    );
  };

  const styles = {
    container: {
      flex: 1,
      backgroundColor: '#999',
      justifyContent: 'center',
    },
    item: {
      flex: 1/2,
      backgroundColor: '#CCC',
      width: 120,
      margin: 10,
      height: 140,
      alignItems: 'center',
      justifyContent: 'center',
    },
    button:{
        flex: 1,
        backgroundColor: '#123',
        
        color: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    }
  };

  export default HomeScreen
import React from 'react';
import {
    Text, 
    View,
    StyleSheet
} from 'react-native';

export default class Favorite extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Favorite</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 16,
      flex:1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      alignItem: 'center',
      textAlign: 'center'
    },
    title: {
      fontSize: 30,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontFamily: 'caveat',
    }
})
import React from 'react';
import {
    Text, 
    View,
    StyleSheet
} from 'react-native';
import CategoryListItem from '../components/CategoryListItem';
import * as Font from 'expo-font';

export default class Home extends React.Component {
    componentDidMount() {
        Font.loadAsync({
          'caveat': require('../assets/fonts/Caveat-Bold.ttf'),
        });
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>My gallary</Text>
                <CategoryListItem />
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
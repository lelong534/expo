import React from 'react';
import {
    Text, 
    View,
    StyleSheet,
    TextInput,
    ImageBackground,
    Image,
    Dimensions,
    Button,
    TouchableOpacity
} from 'react-native';

import bgImage from '../assets/thao_tam.jpg';
import logo from '../assets/icon.png';
import {createSackNavigator} from 'react-navigation';

const {width: WIDTH} = Dimensions.get('window');

export default class Login extends React.Component {
    render() {
        return (
            <ImageBackground source={bgImage} style={styles.container}>
                <View>
                    <TextInput
                        style= {styles.input}
                        placeholder={'Username'}
                        placeholderTextColor={'#fefefe'}
                    />
                    <TextInput
                        style= {styles.input}
                        placeholder={'Password'}
                        placeholderTextColor={'#fefefe'}
                    />
                    <TouchableOpacity 
                        style={styles.btnLogin}
                        onPress={() => this.props.navigation.navigate('Home')}
                    >
                        <Text style={styles.textLogin}>Login</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 16,
      flex:1,
      justifyContent: 'center',
      alignItem: 'center'
    },
    input: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'orange',
        fontSize: 16,
        paddingLeft: 45,
        marginHorizontal: 25,
        marginBottom: 16
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        backgroundColor: 'pink',
        marginHorizontal: 25,
    },
    textLogin: {
        color: "#fff",
        textAlign: 'center',
        padding: 12
    }
  })
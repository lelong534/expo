import React from 'react';
import {
    Image, 
    Text, 
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import imageData from '../data/imageData';

function Item({ id, source, description, descript_age }) {
    return (
        <View>
            <Image source={source} style={styles.image}/>
            <Text style={styles.description}>{description}</Text>
            <Text style={styles.description}>{descript_age}</Text>
        </View>
    )
}

export default function CategoryListItem() {
    return (
        <View style={styles.container}>
            <FlatList
                data={imageData}
                renderItem={({ item }) => (
                    <Item
                      id={item.id}
                      source={item.source}
                      description={item.description}
                      descript_age={item.descript_age}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    image: {
        height: 560,
        margin: 16,
        resizeMode: 'cover',
        borderRadius: '5%',
        borderWidth: 1,
    },
    desciption: {
        fontSize: 30,
        fontWeight: 600,
    }
})


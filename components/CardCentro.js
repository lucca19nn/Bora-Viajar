import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export default function CardCentro() {
    const [city, setCity] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={styles.nameCity}>{city?.name}</Text>
            <View>
                <Image source={{uri: }} />
                <Image source={{uri: }} />
                <Image source={{uri: }} />
            </View>
            <Text style={styles.description}></Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    }
})
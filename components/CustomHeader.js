import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function CustomHeader({ title, onBack }) {
    return (
        <View style={styles.header}>
            {onBack ? (
                <TouchableOpacity onPress={onBack} style={styles.backButton}>
                    <Text style={styles.backText}>{"<"}</Text>
                </TouchableOpacity>
            ) : (
                <View style={{ width: 40 }} />
            )}
            <Text style={styles.title}>{title}</Text>
            <View style={{ width: 40 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        marginBottom: 20,
        height: 70,
        backgroundColor: '#25C0C0',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
    },
    backButton: {
        width: 40,
        alignItems: 'flex-start',
    },
    backText: {
        color: '#fff',
        fontSize: 30,
    },
    title: {
        flex: 1,
        color: '#fff',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
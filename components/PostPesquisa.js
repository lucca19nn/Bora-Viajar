import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, FlatList, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default function PostPesquisa({ posts, loading }) {
    if (loading) return <Text>Carregando...</Text>;
    if (!posts || posts.length === 0) return <Text>Nenhum post encontrado.</Text>;

    return (
        <FlatList
            data={posts}
            keyExtractor={(item) => item.id?.toString()}
            renderItem={({ item }) => (
                <View style={styles.container}>
                                        {item?.tag && (
                        <TouchableOpacity
                            style={[
                                styles.alertButton,
                                item.tag === 'ALERTA' && { backgroundColor: '#f8d7da' },   // vermelho claro
                                item.tag === 'NOVIDADES' && { backgroundColor: '#fff3cd' }, // amarelo claro
                                (item.tag === 'PROMOÇÃO' || item.tag === 'PROMO€ÇO') && { backgroundColor: '#d4edda' }, // verde claro
                            ]}
                        >
                            <Text style={[
                                styles.alertButtonText,
                                item.tag === 'ALERTA' && { color: '#721c24' },
                                item.tag === 'NOVIDADES' && { color: '#856404' },
                                (item.tag === 'PROMOÇÃO' || item.tag === 'PROMO€ÇO') && { color: '#155724' },
                            ]}>
                                {item.tag}
                            </Text>
                        </TouchableOpacity>
                    )}
                    <Text style={styles.postContent}>{item.description || "Sem descrição"}</Text>
                    {item.image && (
                        <Image
                            style={styles.postImage}
                            source={{ uri: `${process.env.EXPO_PUBLIC_API_URL_UPLOAD}/${item.image}` }}
                        />
                    )}
                </View>
            )}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 15,
        marginVertical: 10,
        marginHorizontal: width * 0.025,
        elevation: 3,
        borderWidth: 1,
        borderColor: '#ddd',
    },
    postContent: {
        fontSize: 14,
        color: '#333',
        marginBottom: 10,
    },
    postImage: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    alertButton: {
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 15,
        alignSelf: 'flex-start',
        marginBottom: 10,
    },
    alertButtonText: {
        fontWeight: 'bold',
        fontSize: 14,
    },
});
import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Dimensions, Text, TextInput } from "react-native";
import Post from "../components/Post";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let results = [];
                if (search) {
                    const tagRes = await fetch(
                        `${process.env.EXPO_PUBLIC_API_URL}/posts?tag=${encodeURIComponent(search)}`,
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'x-api-key': process.env.EXPO_PUBLIC_API_KEY,
                            },
                        }
                    );
                    const tagData = await tagRes.json();
                    
                    const descriptionRes = await fetch(
                        `${process.env.EXPO_PUBLIC_API_URL}/posts?description=${encodeURIComponent(search)}`,
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'x-api-key': process.env.EXPO_PUBLIC_API_KEY,
                            },
                        }
                    );
                    const descData = await descriptionRes.json();
                    const ids = new Set();
                    results = [...tagData, ...descData].filter(post => {
                        if (ids.has(post.id)) return false;
                        ids.add(post.id);
                        return true;
                    });
                } else {
                    const allRes = await fetch(
                        `${process.env.EXPO_PUBLIC_API_URL}/posts`,
                        {
                            method: 'GET',
                            headers: {
                                'Content-Type': 'application/json',
                                'x-api-key': process.env.EXPO_PUBLIC_API_KEY,
                            },
                        }
                    );
                    results = await allRes.json();
                }
                setPosts(results);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [search]);

    return (
        <SafeAreaView style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Pesquisar..."
                value={search}
                onChangeText={setSearch}
            />
            <FlatList
                style={styles.verticalList}
                data={posts}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item) => item.id?.toString()}
                renderItem={({ item }) => (
                    <View style={[{ width: cardWidth }]}>
                        <Post post={item} />
                    </View>
                )}
                ListEmptyComponent={loading ? <View /> : <View><Text>Nenhum post encontrado</Text></View>}
            />
        </SafeAreaView>
    );
}

const styles = {
    container: {
        flex: 1,
        width: "100%",
    },
    searchInput: {
        height: 50,
        borderColor: "#25c0c0",
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 10,
        margin: 20,
        color: "#25c0c0",
        fontSize: 16,
        backgroundColor: "#ffffff",
    },
};
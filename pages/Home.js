import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Dimensions, Text, TextInput } from "react-native";
import Post from "../components/Post";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    // Remove duplicados pelo id antes de exibir
    const getUniquePosts = (postsArray) => {
        const seen = new Set();
        return postsArray.filter(post => {
            if (!post.id) return true; // mantém posts sem id
            if (seen.has(post.id)) return false;
            seen.add(post.id);
            return true;
        });
    };

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
                    results = [...tagData, ...descData];
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

    // Só exibe posts únicos
    const uniquePosts = getUniquePosts(posts);

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
                data={uniquePosts}
                showsVerticalScrollIndicator={true}
                keyExtractor={(item, idx) =>
                    item.id
                        ? `post-${item.id}-${idx}`
                        : (item._id ? `post-${item._id}-${idx}` : `post-${idx}`)
                }
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
import React, { useState, useEffect } from "react";
import { View, SafeAreaView, FlatList, Dimensions, Text } from "react-native";
import Post from "../components/Post";

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsUrl = `${process.env.EXPO_PUBLIC_API_URL}/posts`;
                const [response] = await Promise.all([
                    fetch(postsUrl, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-api-key': process.env.EXPO_PUBLIC_API_KEY,
                        },
                    }),
                ]);

                const data = await response.json();

                setPosts(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
    
        fetchPosts();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
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
};
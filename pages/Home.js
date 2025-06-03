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
                // Duas URLs diferentes
                const postsUrl = 'http://10.88.199.132:3000/api/posts';
                const usersUrl = 'http://10.88.199.132:3000/api/users';
    
                // Faz as duas requisições em paralelo
                const [response1, response2] = await Promise.all([
                    fetch(postsUrl, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-api-key': 'B0raV1@j@2025',
                        },
                    }),
                    fetch(usersUrl, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'x-api-key': 'B0raV1@j@2025',
                        },
                    }),
                ]);
    
                const data1 = await response1.json();
                const data2 = await response2.json();

                setPosts([...data1, ...data2]);
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
    verticalList: {
        padding: 10,
    }
};
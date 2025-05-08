import React from "react";
import { View, SafeAreaView, FlatList, ScrollView, Dimensions } from "react-native";
import Post from "../components/Post";

export default function Home() {
    const posts = [
        { id: "1", photo: "https://i.pinimg.com/736x/3d/9d/e4/3d9de41ce4257e86f18e79b937404cc7.jpg", name: "Laura", image1: "https://i.pinimg.com/736x/f2/bb/33/f2bb33feb2c17a3469acea8b26afe113.jpg", image2: "https://i.pinimg.com/736x/2c/7b/9e/2c7b9e4473cd7fb01b875fffef987c26.jpg", description: "Amo ler sentindo a brisa dessa praia!", tag: "NOVIDADES" },
        { id: "3", photo: "https://i.pinimg.com/736x/95/f4/36/95f436e514bc615a1a557e0b01c391af.jpg", name: "Flávia", image1: "", image2: "", description: "Transito demais aqui no Allianz Parque", tag: "ALERTA" },
        { id: "3", photo: "https://i.pinimg.com/736x/ae/7b/8b/ae7b8bdc5a4ce2d97d744bc91e1300da.jpg", name: "Isabella", image1: "", image2: "", description: "Quero morar aqui", tag: "" },
        { id: "1", photo: "https://i.pinimg.com/736x/3d/9d/e4/3d9de41ce4257e86f18e79b937404cc7.jpg", name: "Laura", image1: "https://i.pinimg.com/736x/f2/bb/33/f2bb33feb2c17a3469acea8b26afe113.jpg", image2: "https://i.pinimg.com/736x/2c/7b/9e/2c7b9e4473cd7fb01b875fffef987c26.jpg", description: "Amo ler sentindo a brisa dessa praia!", tag: "NOVIDADES" },
        { id: "3", photo: "https://i.pinimg.com/736x/95/f4/36/95f436e514bc615a1a557e0b01c391af.jpg", name: "Flávia", image1: "", image2: "", description: "Transito demais aqui no Allianz Parque", tag: "ALERTA" },
        { id: "3", photo: "https://i.pinimg.com/736x/ae/7b/8b/ae7b8bdc5a4ce2d97d744bc91e1300da.jpg", name: "Isabella", image1: "", image2: "", description: "Quero morar aqui", tag: "" },
        { id: "1", photo: "https://i.pinimg.com/736x/3d/9d/e4/3d9de41ce4257e86f18e79b937404cc7.jpg", name: "Laura", image1: "https://i.pinimg.com/736x/f2/bb/33/f2bb33feb2c17a3469acea8b26afe113.jpg", image2: "https://i.pinimg.com/736x/2c/7b/9e/2c7b9e4473cd7fb01b875fffef987c26.jpg", description: "Amo ler sentindo a brisa dessa praia!", tag: "NOVIDADES" },
        { id: "3", photo: "https://i.pinimg.com/736x/95/f4/36/95f436e514bc615a1a557e0b01c391af.jpg", name: "Flávia", image1: "", image2: "", description: "Transito demais aqui no Allianz Parque", tag: "ALERTA" },
        { id: "3", photo: "https://i.pinimg.com/736x/ae/7b/8b/ae7b8bdc5a4ce2d97d744bc91e1300da.jpg", name: "Isabella", image1: "", image2: "", description: "Quero morar aqui", tag: "" },
    ];
    const screenWidth = Dimensions.get("window").width;
    const cardWidth = screenWidth / 2;

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollContainer}>
                <FlatList
                    style={styles.verticalList}
                    data={posts}
                    vertical
                    showsVerticalScrollIndicator={true}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={[{ width: cardWidth }]}>
                            <Post post={item} />
                        </View>
                    )}
                />
            </ScrollView>
        </SafeAreaView>
    );
}


const styles = {
    container: {
        flex: 1,
        width: "100%",
    },
    verticalList: {
        flexGrow: 0,
    },
};
import React, { useState, useEffect } from "react";
import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
    Linking,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

export default function CentroOeste() {
    const navigation = useNavigation();
    const [estados, setEstados] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "http://10.88.199.170:3000/api/regions?region=Centro-Oeste"
                );
                const data = await response.json();
                console.log("Dados recebidos:", data);
                setEstados(data);
            } catch (error) {
                console.error("Erro ao buscar dados:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const renderItem = ({ item }) => (
        <View style={{ width, alignItems: "center" }}>
            <View style={styles.imageContainer}>
                <Image
                    source={{ uri: `http://10.88.199.170:3000/uploads/${item.image}` }}
                    style={styles.headerImage}
                />
                <View style={styles.textOverlay}>
                    <Text style={styles.titleImage}>{item.name}</Text>
                    <Text style={styles.subtitle}>
                        {item.state ? `${item.name} - ${item.state}` : ""}
                    </Text>
                </View>
            </View>

            <View style={styles.descricaoContainer}>
                <Text style={styles.descricao}>{item.text}</Text>
            </View>

            {item.links?.trim() && (
                <View style={styles.pontosContainer}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL(item.links)}
                        style={styles.buttonLink}
                    >
                        <Text style={styles.textLink}>Saiba mais 🗺️</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            {loading ? (
                <Text style={{ textAlign: "center", marginTop: 20 }}>Carregando...</Text>
            ) : (
                <FlatList
                    data={estados}
                    keyExtractor={(item) => item.id}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    renderItem={renderItem}
                />
            )}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.goBack()}
            >
                <Text style={styles.buttonText}>Voltar ao Filtro</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    imageContainer: {
        position: "relative",
    },
    headerImage: {
        width: width,
        height: 550,
        resizeMode: "cover",
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
    },
    textOverlay: {
        position: "absolute",
        bottom: 20,
        left: 20,
    },
    titleImage: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#fff",
        textShadowColor: "rgba(0, 0, 0, 0.75)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
    },
    subtitle: {
        fontSize: 15,
        color: "#f0f0f0",
        fontWeight: "600",
        marginTop: 4,
    },
    descricaoContainer: {
        paddingHorizontal: 20,
        marginTop: 25,
        alignItems: "center",
    },
    descricao: {
        fontSize: 17,
        color: "#333",
        textAlign: "justify",
        fontWeight: "500",
    },
    linkContainer: {
        marginTop: 20,
        alignItems: "center",
    },
    buttonLink: {
        backgroundColor: "#ffff",
        borderColor: "#25c0c0",
        borderWidth: 2,
        color: "#25c0c0",
        padding: 10,
        borderRadius: 5,
        marginTop: 25,
        alignItems: "center",
    },
    textLink: {
        color: "#25c0c0",
        fontSize: 16,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: "#25c0c0",
        padding: 10,
        margin: 20,
        borderRadius: 5,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
};

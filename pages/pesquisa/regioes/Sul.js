import React from "react";
import {
    View,
    FlatList,
    Text,
    Image,
    TouchableOpacity,
    Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const estados = [
    {
        id: "pr",
        nome: "Paraná",
        capital: "Curitiba",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/curitiba-parana-capa2019-01.jpg",
        descricao:
            "O Paraná é conhecido pelas Cataratas do Iguaçu, uma das maiores quedas d'água do mundo, além de belas cidades como Curitiba e paisagens naturais impressionantes.",
        pontos: [
            {
                id: "pr-1",
                titulo: "Cataratas do Iguaçu",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/cataratas-iguacu-parana-capa2019-01.jpg",
            },
            {
                id: "pr-2",
                titulo: "Jardim Botânico de Curitiba",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/jardim-botanico-curitiba-capa2019-01.jpg",
            },
            {
                id: "pr-3",
                titulo: "Ilha do Mel",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/ilha-do-mel-parana-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "sc",
        nome: "Santa Catarina",
        capital: "Florianópolis",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/florianopolis-santa-catarina-capa2019-01.jpg",
        descricao:
            "Santa Catarina é famosa por suas belas praias, cidades históricas e festas tradicionais. Florianópolis, a capital, é conhecida como a Ilha da Magia.",
        pontos: [
            {
                id: "sc-1",
                titulo: "Praia de Jurerê",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/jurere-florianopolis-capa2019-01.jpg",
            },
            {
                id: "sc-2",
                titulo: "Beto Carrero World",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/beto-carrero-world-capa2019-01.jpg",
            },
            {
                id: "sc-3",
                titulo: "Serra do Rio do Rastro",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/serra-rio-rastro-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "rs",
        nome: "Rio Grande do Sul",
        capital: "Porto Alegre",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/porto-alegre-rio-grande-do-sul-capa2019-01.jpg",
        descricao:
            "O Rio Grande do Sul destaca-se pela cultura gaúcha, vinícolas, belas serras e cidades turísticas como Gramado e Canela.",
        pontos: [
            {
                id: "rs-1",
                titulo: "Gramado",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/gramado-rio-grande-do-sul-capa2019-01.jpg",
            },
            {
                id: "rs-2",
                titulo: "Cânion Itaimbezinho",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/canion-itaimbezinho-rs-capa2019-01.jpg",
            },
            {
                id: "rs-3",
                titulo: "Vale dos Vinhedos",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/vale-vinhedos-bento-goncalves-capa2019-01.jpg",
            },
        ],
    },
];

export default function Sul() {
    const navigation = useNavigation();

    const renderItem = ({ item }) => (
        <View style={{ width, alignItems: "center" }}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: item.imagem }} style={styles.headerImage} />
                <View style={styles.textOverlay}>
                    <Text style={styles.titleImage}>{item.nome}</Text>
                    <Text style={styles.subtitle}>
                        {item.capital ? `${item.capital} - ${item.id.toUpperCase()}` : ""}
                    </Text>
                </View>
            </View>

            <View style={styles.descricaoContainer}>
                <Text style={styles.descricao}>{item.descricao}</Text>
            </View>

            <View style={styles.pontosContainer}>
                {item.pontos.map((ponto) => (
                    <View key={ponto.id} style={styles.pontoBox}>
                        <Image source={{ uri: ponto.imagem }} style={styles.pontoImage} />
                        <Text style={styles.pontoTitulo}>{ponto.titulo}</Text>
                    </View>
                ))}
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={estados}
                keyExtractor={(item) => item.id}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                renderItem={renderItem}
            />
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
        height: 350,
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
    pontosContainer: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 20,
        gap: 16,
    },
    pontoBox: {
        alignItems: "center",
        marginHorizontal: 9,
        marginTop: 15,
    },
    pontoImage: {
        width: 100,
        height: 100,
        borderRadius: 20,
        marginBottom: 8,
    },
    pontoTitulo: {
        fontSize: 15,
        textAlign: "center",
        maxWidth: 100,
        fontWeight: "500",
    },
    button: {
        backgroundColor: "#00bcd4",
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
    subtitle: {
        fontSize: 15,
        color: "#f0f0f0",
        fontWeight: "600",
        marginTop: 4,
    },
};

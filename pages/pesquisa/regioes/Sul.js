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
            "https://www.farejaviagens.com.br/wp-content/uploads/2024/07/Passeio-Publico-Curitiba-Foto-Prefeitura-de-Curitiba.jpg",
        descricao:
            "O Paraná é conhecido pelas Cataratas do Iguaçu, uma das maiores quedas d'água do mundo, além de belas cidades como Curitiba e paisagens naturais impressionantes.",
        pontos: [
            {
                id: "pr-1",
                titulo: "Cataratas do Iguaçu",
                imagem:
                    "https://www.cnnbrasil.com.br/viagemegastronomia/wp-content/uploads/sites/5/2021/05/cataratas.jpg?w=1200&h=900&crop=1",
            },
            {
                id: "pr-2",
                titulo: "Jardim Botânico de Curitiba",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl6Qzn7Ysncry8WpXc6GVtEe_S2EgPFtdVYg&s",
            },
            {
                id: "pr-3",
                titulo: "Ilha do Mel",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ8Sb2TS5QpcddKPM4bePTub6NU6ID90YhFw&s",
            },
        ],
    },
    {
        id: "sc",
        nome: "Santa Catarina",
        capital: "Florianópolis",
        imagem:
            "https://upload.wikimedia.org/wikipedia/commons/0/09/Morro_da_Cruz%2C_Florian%C3%B3polis_-_SC%2C_Brazil_-_panoramio_%28cropped%29.jpg",
        descricao:
            "Santa Catarina é famosa por suas belas praias, cidades históricas e festas tradicionais. Florianópolis, a capital, é conhecida como a Ilha da Magia.",
        pontos: [
            {
                id: "sc-1",
                titulo: "Praia de Jurerê",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQRyrGBQHph1dH66EK-vzRj0DB5b2MO7IxPg&s",
            },
            {
                id: "sc-2",
                titulo: "Beto Carrero World",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2ajdyI0iVScd5PrJxWDGtU1c1AnHUfahx-A&s",
            },
            {
                id: "sc-3",
                titulo: "Serra do Rio do Rastro",
                imagem:
                    "https://static.wixstatic.com/media/69eb05_2687665295f446fe86a085ba293f1bdd~mv2.jpg/v1/fill/w_560,h_374,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/69eb05_2687665295f446fe86a085ba293f1bdd~mv2.jpg",
            },
        ],
    },
    {
        id: "rs",
        nome: "Rio Grande do Sul",
        capital: "Porto Alegre",
        imagem:
            "https://www.matinaljornalismo.com.br/wp-content/uploads/2022/03/vista-aerea-porto-alegre.jpeg",
        descricao:
            "O Rio Grande do Sul destaca-se pela cultura gaúcha, vinícolas, belas serras e cidades turísticas como Gramado e Canela.",
        pontos: [
            {
                id: "rs-1",
                titulo: "Gramado",
                imagem:
                    "https://hoteisfioreze.com.br/wp-content/uploads/2020/09/6-pontos-tur%C3%ADsticos-de-Gramado-imperd%C3%ADveis.jpg",
            },
            {
                id: "rs-2",
                titulo: "Cânion Itaimbezinho",
                imagem:
                    "https://cdn.api.wine-locals.com/vivars/images/small_large_itaimbezinho_716814ce17.webp",
            },
            {
                id: "rs-3",
                titulo: "Vale dos Vinhedos",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsoeuYDo3QQRHnKVDHR2_udwHZTfirH-hO4A&s",
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

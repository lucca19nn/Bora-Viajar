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
        id: "sp",
        nome: "São Paulo",
        capital: "São Paulo",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/sao-paulo-capa2019-01.jpg",
        descricao:
            "São Paulo é o estado mais populoso do Brasil, conhecido por sua capital cosmopolita, praias no litoral, serras e cidades históricas.",
        pontos: [
            {
                id: "sp-1",
                titulo: "Avenida Paulista",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/avenida-paulista-sao-paulo-capa2019-01.jpg",
            },
            {
                id: "sp-2",
                titulo: "Parque Ibirapuera",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/parque-ibirapuera-sao-paulo-capa2019-01.jpg",
            },
            {
                id: "sp-3",
                titulo: "Campos do Jordão",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/campos-jordao-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "rj",
        nome: "Rio de Janeiro",
        capital: "Rio de Janeiro",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/rio-de-janeiro-capa2019-01.jpg",
        descricao:
            "O Rio de Janeiro é famoso por suas praias, o Cristo Redentor, o Pão de Açúcar e o Carnaval. Possui belas cidades serranas e litorâneas.",
        pontos: [
            {
                id: "rj-1",
                titulo: "Cristo Redentor",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/cristo-redentor-rio-capa2019-01.jpg",
            },
            {
                id: "rj-2",
                titulo: "Praia de Copacabana",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/copacabana-rio-capa2019-01.jpg",
            },
            {
                id: "rj-3",
                titulo: "Pão de Açúcar",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/pao-de-acucar-rio-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "mg",
        nome: "Minas Gerais",
        capital: "Belo Horizonte",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/belo-horizonte-minas-capa2019-01.jpg",
        descricao:
            "Minas Gerais é conhecida por suas cidades históricas, culinária típica, montanhas e cachoeiras. Belo Horizonte é a capital do estado.",
        pontos: [
            {
                id: "mg-1",
                titulo: "Ouro Preto",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/ouro-preto-minas-capa2019-01.jpg",
            },
            {
                id: "mg-2",
                titulo: "Serra do Cipó",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/serra-cipo-minas-capa2019-01.jpg",
            },
            {
                id: "mg-3",
                titulo: "Inhotim",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/inhotim-minas-capa2019-01.jpg",
            },
        ],
    },
    {
        id: "es",
        nome: "Espírito Santo",
        capital: "Vitória",
        imagem:
            "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/vitoria-espirito-santo-capa2019-01.jpg",
        descricao:
            "O Espírito Santo possui belas praias, montanhas e cultura capixaba. Vitória, a capital, é conhecida por sua qualidade de vida e gastronomia.",
        pontos: [
            {
                id: "es-1",
                titulo: "Praia da Costa",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/praia-costa-vila-velha-capa2019-01.jpg",
            },
            {
                id: "es-2",
                titulo: "Convento da Penha",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/convento-penha-vila-velha-capa2019-01.jpg",
            },
            {
                id: "es-3",
                titulo: "Domingos Martins",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/12/domingos-martins-es-capa2019-01.jpg",
            },
        ],
    },
];

export default function Sudeste() {
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

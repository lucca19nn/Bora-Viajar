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
        id: "df",
        nome: "Distrito Federal",
        capital: "Brasília",
        imagem:
            "https://cdn.blablacar.com/wp-content/uploads/br/2023/10/05100122/brasilia-df-3.webp",
        descricao:
            "O Distrito Federal abriga a capital do Brasil, Brasília, famosa por sua arquitetura moderna, monumentos e vida política intensa.",
        pontos: [
            {
                id: "df-1",
                titulo: "Congresso Nacional",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykA-QBdI4lwR-C3znHWGxQeIioOSE1qns9A&s",
            },
            {
                id: "df-2",
                titulo: "Catedral de Brasília",
                imagem:
                    "https://forbes.com.br/wp-content/uploads/2023/04/Life_Brasilia-turismo-1024x683.jpg",
            },
            {
                id: "df-3",
                titulo: "Parque da Cidade",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/01/46/cd/visao-aerea.jpg?w=1200&h=-1&s=1",
            },
        ],
    },
    {
        id: "go",
        nome: "Goiás",
        capital: "Goiânia",
        imagem:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0f/7c/7d/dd/reflexo-dos-predios-que.jpg?w=1200&h=1200&s=1",
        descricao:
            "Goiás é conhecido por suas cidades históricas, cachoeiras e o Parque Nacional da Chapada dos Veadeiros. Goiânia destaca-se pela vida urbana e áreas verdes.",
        pontos: [
            {
                id: "go-1",
                titulo: "Chapada dos Veadeiros",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqvPqOC2Vr8IIsALxaC_SdIQ2rbQNtZNYnOw&s",
            },
            {
                id: "go-2",
                titulo: "Cidade de Goiás",
                imagem:
                    "https://goias.gov.br/cultura/wp-content/uploads/sites/25/2016/08/cidade-de-goias-velho-foto-mantovani-fernandes7730-717.jpg",
            },
            {
                id: "go-3",
                titulo: "Parque Flamboyant",
                imagem:
                    "https://www.quintoandar.com.br/guias/wp-content/uploads/2023/02/parque-flamboyant-2-1.jpg",
            },
        ],
    },
    {
        id: "mt",
        nome: "Mato Grosso",
        capital: "Cuiabá",
        imagem:
            "https://starlis.com.br/wp-content/uploads/2023/04/Depositphotos_410982710_XL.jpg",
        descricao:
            "Mato Grosso é famoso pelo Pantanal, Chapada dos Guimarães e rica biodiversidade. Cuiabá é a porta de entrada para aventuras ecológicas.",
        pontos: [
            {
                id: "mt-1",
                titulo: "Pantanal",
                imagem:
                    "https://s2.static.brasilescola.uol.com.br/be/2020/06/areas-alagadas.jpg",
            },
            {
                id: "mt-2",
                titulo: "Chapada dos Guimarães",
                imagem:
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2023/07/o-que-fazer-chapada-dos-guimaraes-dicas-capa.jpg",
            },
            {
                id: "mt-3",
                titulo: "Parque Mãe Bonifácia",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/b9/7d/65/lindo-lugar-perfeito.jpg?w=1200&h=-1&s=1",
            },
        ],
    },
    {
        id: "ms",
        nome: "Mato Grosso do Sul",
        capital: "Campo Grande",
        imagem:
            "https://cdn6.campograndenews.com.br/uploads/noticias/2024/05/12/9d0cf80a98547b9abb8719cfe03222fe6c97c4a2.jpeg",
        descricao:
            "Mato Grosso do Sul é conhecido por Bonito, com águas cristalinas, grutas e cachoeiras, além do Pantanal Sul. Campo Grande é moderna e acolhedora.",
        pontos: [
            {
                id: "ms-1",
                titulo: "Bonito",
                imagem:
                    "https://upload.wikimedia.org/wikipedia/commons/3/34/Abismo_Anhumas%2C_Bonito%2C_MS.JPG",
            },
            {
                id: "ms-2",
                titulo: "Pantanal Sul",
                imagem:
                    "https://www.bonitoway.com.br/blog/wp-content/uploads/2023/12/bonito_way_bonito_ms_pantanal.png",
            },
            {
                id: "ms-3",
                titulo: "Parque das Nações Indígenas",
                imagem:
                    "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tarde_quente.jpg",
            },
        ],
    },
];

export default function CentroOeste() {
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

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
        id: "ac",
        nome: "Acre",
        capital: "Rio Branco",
        imagem:
            "https://i.pinimg.com/564x/c4/9b/d3/c49bd30d7b0ab36ad6292fcb07a8e233.jpg",
        descricao:
            "O Acre é conhecido por sua floresta amazônica, cultura indígena e rios navegáveis. Rio Branco, a capital, oferece museus e contato com a natureza.",
        pontos: [
            {
                id: "ac-1",
                titulo: "Parque Ambiental Chico Mendes",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoklwTAKh16zgSbhbrxPsgs-7By8CVtNZ5SQ&s",
            },
            {
                id: "ac-2",
                titulo: "Rio Acre",
                imagem:
                    "https://upload.wikimedia.org/wikipedia/commons/a/a5/A_vis%C3%A3o_a%C3%A9rea_do_rio_Acre_mostra_a_impon%C3%AAncia_de_suas_pontes_e_passarela.jpg",
            },
            {
                id: "ac-3",
                titulo: "Museu da Borracha",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/7d/76/42/em-obras.jpg?w=1200&h=-1&s=1",
            },
        ],
    },
    {
        id: "am",
        nome: "Amazonas",
        capital: "Manaus",
        imagem:
            "https://i0.wp.com/cabocloshousecolodge.com/wp-content/uploads/2022/07/manaus-teatro-amazonas-manaus.am_.gov_.br_-1.jpg?fit=1000%2C610&ssl=1",
        descricao:
            "O Amazonas abriga a maior floresta tropical do mundo e o famoso Encontro das Águas. Manaus destaca-se pelo Teatro Amazonas e rica cultura.",
        pontos: [
            {
                id: "am-1",
                titulo: "Teatro Amazonas",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3f/0c/8e/museu-do-teatro-amazonas.jpg?w=1200&h=1200&s=1",
            },
            {
                id: "am-2",
                titulo: "Encontro das Águas",
                imagem:
                    "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/8551c7cb9ffa4963855c752b712f2edc.jpg",
            },
            {
                id: "am-3",
                titulo: "Mercado Municipal Adolpho Lisboa",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/26/7e/4b/mercado-municipal-adolfo.jpg?w=1200&h=1200&s=1",
            },
        ],
    },
    {
        id: "ap",
        nome: "Amapá",
        capital: "Macapá",
        imagem:
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/47/1f/18/macapa-ap.jpg?w=500&h=500&s=1",
        descricao:
            "O Amapá é famoso pelo Marco Zero do Equador e pela Fortaleza de São José. Macapá oferece cultura, história e belezas naturais.",
        pontos: [
            {
                id: "ap-1",
                titulo: "Marco Zero do Equador",
                imagem:
                    "https://agenciaamapa.com.br/midias/2024/grandes/up_ag_25034_29539413-0e94-7d9f-abbb-1e7d8b97f1bd.jpg",
            },
            {
                id: "ap-2",
                titulo: "Fortaleza de São José",
                imagem:
                    "https://www.folhadoamapa.com/images/noticias/13374/71000a69b4e40dacc029bd592b9f2905.jpg",
            },
            {
                id: "ap-3",
                titulo: "Parque Nacional do Tumucumaque",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjD0XE-_qNNhCWlebK30uCXXLWpuP1G4c9wg&s",
            },
        ],
    },
    {
        id: "pa",
        nome: "Pará",
        capital: "Belém",
        imagem:
            "https://hweb-upload.s3-sa-east-1.amazonaws.com/657757b56776121d6bdfbf93/1e081954564d48d8ab027195031a7f7b.webp",
        descricao:
            "O Pará encanta com a Ilha de Marajó, culinária típica e o Círio de Nazaré. Belém é famosa pelo Mercado Ver-o-Peso e manguezais.",
        pontos: [
            {
                id: "pa-1",
                titulo: "Mercado Ver-o-Peso",
                imagem:
                    "https://s2-g1.glbimg.com/eGJCCSP4dpf0ieVa5WzXpSiZnXw=/0x0:870x580/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/v/4/BotxeURr6UQ26KhPvKDA/veropa.jpg",
            },
            {
                id: "pa-2",
                titulo: "Ilha de Marajó",
                imagem:
                    "https://www.tevejopelomundo.com.br/wp-content/uploads/2019/11/ilha-de-marajo.jpg",
            },
            {
                id: "pa-3",
                titulo: "Basílica de Nazaré",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8RvN0ZwjYS3klrMC11l7z7V9U5dyptapCqg&s",
            },
        ],
    },
    {
        id: "ro",
        nome: "Rondônia",
        capital: "Porto Velho",
        imagem:
            "https://www.cidadeecultura.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2021/06/40930598971_594a322eca_c.jpg.webp",
        descricao:
            "Rondônia destaca-se pela Estrada de Ferro Madeira-Mamoré, rios e reservas naturais. Porto Velho é a porta de entrada para a Amazônia Ocidental.",
        pontos: [
            {
                id: "ro-1",
                titulo: "Estrada de Ferro Madeira-Mamoré",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTivZrGBaWU1QccgyKPynGQe-Gnqg42UFjiuA&s",
            },
            {
                id: "ro-2",
                titulo: "Catedral Sagrado Coração de Jesus",
                imagem:
                    "https://s2-g1.glbimg.com/AA-BM68xEr4o0lHfx--FrwOr0pc=/0x0:1700x890/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2017/h/O/2JJ1SYTaOBlPwrDTPULw/paroquia-catedral.jpg",
            },
            {
                id: "ro-3",
                titulo: "Parque Natural de Porto Velho",
                imagem:
                    "https://s2-g1.glbimg.com/wnLHBWsrz0th8d6m3Bgma_AaoV4=/0x0:1200x1600/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/q/s/4209FkTCm5pb9VP3rUpg/26aa8c61-4ec8-4d32-9492-8677badec3cb.jpg",
            },
        ],
    },
    {
        id: "rr",
        nome: "Roraima",
        capital: "Boa Vista",
        imagem:
            "https://boavista.rr.gov.br/storage/Noticias/2023/MARCO/agenda1.jpg",
        descricao:
            "Roraima é conhecido pelo Monte Roraima, paisagens exóticas e cultura indígena. Boa Vista é uma das capitais mais planejadas do Brasil.",
        pontos: [
            {
                id: "rr-1",
                titulo: "Monte Roraima",
                imagem:
                    "https://www.infoescola.com/wp-content/uploads/2012/12/monte-roraima_747945205.jpg",
            },
            {
                id: "rr-2",
                titulo: "Praça das Águas",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/5e/36/f0/very-beautiful.jpg?w=900&h=500&s=1",
            },
            {
                id: "rr-3",
                titulo: "Orla Taumanan",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8oeMFc8N9jYa6tTv3Z4C9t0d-ACPrRpU5vg&s",
            },
        ],
    },
    {
        id: "to",
        nome: "Tocantins",
        capital: "Palmas",
        imagem:
            "https://www.segueviagem.com.br/wp-content/uploads/2023/01/viagem-para-palmas-tocantins-predios-praia-da-graciosa-1024x683.jpg",
        descricao:
            "Tocantins é famoso pelo Jalapão, com dunas, cachoeiras e paisagens únicas. Palmas, a capital, é moderna e planejada.",
        pontos: [
            {
                id: "to-1",
                titulo: "Jalapão",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToeHeu0j-bYSfnqa8TVqXrC18H-qTW1_V6yQ&s",
            },
            {
                id: "to-2",
                titulo: "Praia da Graciosa",
                imagem:
                    "https://chapinhanamala.com.br/wp-content/uploads/2019/06/j3.jpg",
            },
            {
                id: "to-3",
                titulo: "Parque Cesamar",
                imagem:
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLjnI9JE4LytFsaQnonCp9wHard3t7RwUoIQ&s",
            },
        ],
    },
];

export default function Norte() {
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

import React, { useState, useEffect, useRef } from "react";
import { View, FlatList, Text, Image, TouchableOpacity, Dimensions, Modal, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

const estados = [
    {
        id: "ac",
        nome: "Acre",
        capital: "Rio Branco",
        imagem:
            "https://www.penaestrada.blog.br/wp-content/webp-express/webp-images/uploads/2013/05/rio-branco-20.jpg.webp",
        descricao:
            "O Acre é conhecido por sua floresta amazônica, cultura indígena e rios navegáveis. Rio Branco, a capital, oferece museus e contato com a natureza.",
        pontos: [
            {
                id: "ac-1",
                titulo: "Parque Ambiental Chico Mendes",
                imagem: "https://rbminio.riobranco.ac.gov.br/turismo/attractions/20240620110842_6a53a30f500275328bd6c2208daabbc6.jpg",
                imagens: [
                    "https://rbminio.riobranco.ac.gov.br/turismo/attractions/20240102131730_667989af8ca89fa5c500cda42e288af3.jpg",
                    "https://rbminio.riobranco.ac.gov.br/turismo/attractions/20240624095027_c3f33f20c3a39d6b752ff836aceaecd2.jpg",
                    "https://rbminio.riobranco.ac.gov.br/turismo/attractions/20240624095123_7fa92ac97ad0abe02a50b04860ad48ec.jpg",
                    "https://rbminio.riobranco.ac.gov.br/turismo/attractions/20240624095330_c22225eccc3514f3f2ffa7750a435797.jpg"
                ],
                descricao: "Descrição do parque..."
            },
            {
                id: "ac-2",
                titulo: "Rio Acre",
                imagem: "https://ac24horas.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-17-at-18.33.11-1000x600.webp",
                imagens: [
                    "https://s2.glbimg.com/QLB5HE65bOW4stJ_TRZnAswbpEE=/620x465/s.glbimg.com/jo/g1/f/original/2015/03/02/cheia_acre_-_foto_jp_30.jpg",
                    "https://ac24horas.com/wp-content/uploads/2025/03/WhatsApp-Image-2025-03-17-at-18.33.12-1-1000x600.webp",
                    "https://folhadoacre.com.br/wp-content/uploads/2024/12/RIO-ACRE-WHIDY-1000x576-1-1.jpg"
                ],
                descricao: "O Rio Acre é um dos principais rios da região Norte, cortando a cidade de Rio Branco e proporcionando belas paisagens e passeios de barco."
            },
            {
                id: "ac-3",
                titulo: "Museu da Borracha",
                imagem: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/7d/76/42/em-obras.jpg?w=1200&h=-1&s=1",
                imagens: [
                    "https://s2-g1.glbimg.com/Oi-grWJcYuynGHzeOIwStvVy7-k=/0x0:1536x866/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2023/y/5/doet6eQS2ct383i4fLeQ/museu-da-borrracha.jpg",
                    "http://painel.portalamazonia.com/uploads/RTEmagicC_museu-borracha-6-acre.jpg.jpg",
                    "http://painel.portalamazonia.com/uploads/RTEmagicC_museu-borracha-8-acre.jpg.jpg",
                    "https://www.femcultura.ac.gov.br/wp-content/uploads/2019/11/211-1536x1152.jpg"
                ],
                descricao: "O Museu da Borracha preserva a história do ciclo da borracha no Acre, com acervo de objetos, documentos e fotografias."
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
                imagens: [
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/3f/0c/8e/museu-do-teatro-amazonas.jpg?w=1200&h=1200&s=1",
                    "https://upload.wikimedia.org/wikipedia/commons/7/7e/Teatro_Amazonas_-_Manaus_-_Amazonas_-_Brasil.jpg",
                    "https://www.cnnbrasil.com.br/wp-content/uploads/sites/5/2022/03/teatro-amazonas-manaus.jpg"
                ],
                descricao: "O Teatro Amazonas é um dos principais cartões-postais de Manaus, símbolo da riqueza do ciclo da borracha."
            },
            {
                id: "am-2",
                titulo: "Encontro das Águas",
                imagem:
                    "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/8551c7cb9ffa4963855c752b712f2edc.jpg",
                imagens: [
                    "https://cdn-hweb.hsystem.com.br/5873d325c19a4207cc40b87c/8551c7cb9ffa4963855c752b712f2edc.jpg",
                    "https://www.melhoresdestinos.com.br/wp-content/uploads/2019/01/encontro-das-aguas-manaus-capa2019-01.jpg",
                    "https://www.passagenspromo.com.br/blog/wp-content/uploads/2020/01/encontro-das-aguas-manaus.jpg"
                ],
                descricao: "O Encontro das Águas é o fenômeno natural onde os rios Negro e Solimões correm lado a lado sem se misturar por vários quilômetros."
            },
            {
                id: "am-3",
                titulo: "Mercado Municipal Adolpho Lisboa",
                imagem:
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/26/7e/4b/mercado-municipal-adolfo.jpg?w=1200&h=1200&s=1",
                imagens: [
                    "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/26/7e/4b/mercado-municipal-adolfo.jpg?w=1200&h=1200&s=1",
                    "https://manausonline.net/imagens/mercado-adolpho-lisboa.jpg",
                    "https://www.manaus.am.gov.br/files/2022/11/mercado-adolpho-lisboa.jpg"
                ],
                descricao: "O Mercado Municipal Adolpho Lisboa é um dos mais antigos do Brasil, com arquitetura inspirada nos mercados europeus."
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
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPonto, setModalPonto] = useState(null);
    const flatListRef = useRef();
    const [modalIndex, setModalIndex] = useState(0);

    useEffect(() => {
        if (!modalVisible || !modalPonto) return;
        const interval = setInterval(() => {
            setModalIndex((prev) => {
                const next = prev + 1 >= modalPonto.imagens.length ? 0 : prev + 1;
                flatListRef.current?.scrollToIndex({ index: next, animated: true });
                return next;
            });
        }, 2500);
        return () => clearInterval(interval);
    }, [modalVisible, modalPonto]);

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
                {item.pontos.map((ponto, index) => (
                    <Pressable
                        key={ponto.id}
                        onPress={() => {
                            setModalPonto(ponto);
                            setModalIndex(0);     
                            setModalVisible(true);
                        }}
                        style={styles.pontoBox}
                    >
                        <Image source={{ uri: ponto.imagem }} style={styles.pontoImage} />
                        <Text style={styles.pontoTitulo}>{ponto.titulo}</Text>
                    </Pressable>
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
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={{
                    flex: 1,
                    backgroundColor: "rgba(0,0,0,0.7)",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <View style={{
                        backgroundColor: "#fff",
                        borderRadius: 20,
                        padding: 20,
                        alignItems: "center",
                        maxWidth: width * 0.9,
                        width: width * 0.9,
                        maxHeight: "80%",
                        justifyContent: "center",
                    }}>
                        <ScrollView contentContainerStyle={{ alignItems: "center" }}>
                            {modalPonto && (
                                <>
                                    <FlatList
                                        ref={flatListRef}
                                        data={modalPonto.imagens}
                                        horizontal
                                        pagingEnabled
                                        showsHorizontalScrollIndicator={false}
                                        keyExtractor={(_, idx) => idx.toString()}
                                        renderItem={({ item }) => (
                                            <View style={{ alignItems: "center", width: width * 0.8, justifyContent: "center" }}>
                                                <Image
                                                    source={{ uri: item }}
                                                    style={{ width: width * 0.7, height: width * 0.7, borderRadius: 20, marginBottom: 16 }}
                                                    resizeMode="cover"
                                                />
                                                <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 10, textAlign: "center" }}>
                                                    {modalPonto.titulo}
                                                </Text>
                                                <Text style={{ fontSize: 16, textAlign: "center", marginBottom: 20 }}>
                                                    {modalPonto.descricao}
                                                </Text>
                                            </View>
                                        )}
                                        getItemLayout={(_, index) => ({
                                            length: width * 0.8,
                                            offset: (width * 0.8) * index,
                                            index,
                                        })}
                                        initialScrollIndex={modalIndex}
                                        onMomentumScrollEnd={e => {
                                            const newIndex = Math.round(e.nativeEvent.contentOffset.x / (width * 0.8));
                                            setModalIndex(newIndex);
                                        }}
                                    />
                                    <TouchableOpacity onPress={() => setModalVisible(false)} style={{ marginTop: 10 }}>
                                        <Text style={{ color: "#00bcd4", fontWeight: "bold", fontSize: 16 }}>Fechar</Text>
                                    </TouchableOpacity>
                                </>
                            )}
                        </ScrollView>
                    </View>
                </View>
            </Modal>
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

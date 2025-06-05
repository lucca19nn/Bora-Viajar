import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import axios from "axios";

export default function Filtro() {
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/news`, {
          headers: {
            "x-api-key": "B0raV1@j@2025"
          }
        });
        setData(response.data);
        console.log("Dados recebidos:", response.data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, []);

  const openModal = (item) => {
    console.log("Abrindo modal com:", item);
    setModalData(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalData(null);
  };

  const destinos = [
    { id: "1", title: "Norte", subtitle: "Veja mais...", image: "https://imgmd.net/images/c_limit%2Cw_3200/v1/guia/1698592/norte-5-cat.jpg", navigateTo: "Norte" },
    { id: "2", title: "Nordeste", subtitle: "Veja mais...", image: "https://blog.hurb.com/wp-content/uploads/2024/09/10-Melhores-Praias-do-Nordeste-Brasileiro-Capa.jpg", navigateTo: "Nordeste" },
    { id: "3", title: "Centro-Oeste", subtitle: "Veja mais...", image: "https://www.vidadeturista.com/wp-content/uploads/2016/03/cidades-outono-2016-brasilia-df.jpg", navigateTo: "Centro" },
    { id: "4", title: "Sul", subtitle: "Veja mais...", image: "https://media.staticontent.com/media/pictures/04641818-297a-4f28-b635-b15e2fb31087", navigateTo: "Sul" },
    { id: "5", title: "Sudeste", subtitle: "Veja mais...", image: "https://cdn.blablacar.com/wp-content/uploads/br/2024/06/05094038/rio-de-janeiro.webp", navigateTo: "Sudeste" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={destinos}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Principais Notícias</Text>
            <FlatList
              data={data}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <Card
                  title={item.name}
                  description={item.place}
                  image={`http://10.88.199.174:3000/uploads/${item.image}`}
                  onPress={() => openModal(item)}
                />
              )}
            />
            <Text style={styles.title}>Top destinos</Text>
          </>
        }
        keyExtractor={(item) => item.id}
        numColumns={1}
        nestedScrollEnabled={true}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <CardFiltro
            title={item.title}
            description={item.subtitle}
            image={item.image}
            onPress={() => navigation.navigate(item.navigateTo)}
          />
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {modalData && (
              <>
                {modalData.image && (
                  <Image
                    source={{ uri: `http://10.88.199.174:3000/uploads/${modalData.image}` }}
                    style={styles.modalImage}
                  />
                )}
                <Text style={styles.modalTitle}>{modalData.name}</Text>
                <Text style={styles.modalSubtitle}>{modalData.text}</Text>

                <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
                  <Text style={styles.closeButtonText}>Fechar</Text>
                </TouchableOpacity>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
    marginTop: 20,
    paddingHorizontal: 10,
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 12,
    padding: 20,
    alignItems: "center",
  },
  modalImage: {
    width: "100%",
    height: 150,
    borderRadius: 10,
    marginBottom: 15,
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: "justify",
  },
  closeButton: {
    backgroundColor: "#25c0c0",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

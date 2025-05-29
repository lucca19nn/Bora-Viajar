import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, Modal, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/Card";
import CardFiltro from "../components/CardFiltros";

export default function Filtro() {
  const navigation = useNavigation();

  const destinos = [
    { id: "1", title: "Norte", subtitle: "Veja mais...", image: "https://imgmd.net/images/c_limit%2Cw_3200/v1/guia/1698592/norte-5-cat.jpg", navigateTo: "Norte" },
    { id: "2", title: "Nordeste", subtitle: "Veja mais...", image: "https://blog.hurb.com/wp-content/uploads/2024/09/10-Melhores-Praias-do-Nordeste-Brasileiro-Capa.jpg", navigateTo: "Nordeste" },
    { id: "3", title: "Centro-Oeste", subtitle: "Veja mais...", image: "https://www.vidadeturista.com/wp-content/uploads/2016/03/cidades-outono-2016-brasilia-df.jpg", navigateTo: "Centro" },
    { id: "4", title: "Sul", subtitle: "Veja mais...", image: "https://media.staticontent.com/media/pictures/04641818-297a-4f28-b635-b15e2fb31087", navigateTo: "Sul" },
    { id: "5", title: "Sudeste", subtitle: "Veja mais...", image: "https://cdn.blablacar.com/wp-content/uploads/br/2024/06/05094038/rio-de-janeiro.webp", navigateTo: "Sudeste" },
    { id: "6", title: "Pantanal em Alta", subtitle: "A vida selvagem do Centro-Oeste", image: "https://www.melhoresdestinos.com.br/wp-content/uploads/2022/09/pantanal-capa2022-01.jpg", navigateTo: "Centro" },
    { id: "7", title: "Festas Juninas", subtitle: "Tradições do Nordeste", image: "https://www.cnnbrasil.com.br/wp-content/uploads/sites/12/2023/06/festa-junina-nordeste.jpg", navigateTo: "Nordeste" },
    { id: "8", title: "Cataratas do Iguaçu", subtitle: "Belezas do Sul", image: "https://www.carpemundi.com.br/wp-content/uploads/2017/07/cataratas-iguacu.jpg", navigateTo: "Sul" },
    { id: "9", title: "Amazônia Viva", subtitle: "Natureza do Norte", image: "https://www.gov.br/mcti/pt-br/acompanhe-o-mcti/noticias/2022/08/amazonia.jpg", navigateTo: "Norte" },
    { id: "10", title: "Cidades Históricas", subtitle: "Riqueza do Sudeste", image: "https://www.melhoresdestinos.com.br/wp-content/uploads/2022/04/cidades-historicas-minas-capa2022-01.jpg", navigateTo: "Sudeste" },
  ];

  const noticias = [
    { id: "1", title: "Norte", subtitle: "Veja mais...", image: "https://imgmd.net/images/c_limit%2Cw_3200/v1/guia/1698592/norte-5-cat.jpg", navigateTo: "Norte" },
    { id: "2", title: "Nordeste", subtitle: "Veja mais...", image: "https://blog.hurb.com/wp-content/uploads/2024/09/10-Melhores-Praias-do-Nordeste-Brasileiro-Capa.jpg", navigateTo: "Nordeste" },
    { id: "3", title: "Centro-Oeste", subtitle: "Veja mais...", image: "https://www.vidadeturista.com/wp-content/uploads/2016/03/cidades-outono-2016-brasilia-df.jpg", navigateTo: "Centro" },
    { id: "4", title: "Sul", subtitle: "Veja mais...", image: "https://media.staticontent.com/media/pictures/04641818-297a-4f28-b635-b15e2fb31087", navigateTo: "Sul" },
    { id: "5", title: "Sudeste", subtitle: "Veja mais...", image: "https://cdn.blablacar.com/wp-content/uploads/br/2024/06/05094038/rio-de-janeiro.webp", navigateTo: "Sudeste" },
  ];

  const [modalVisible, setModalVisible] = useState(false);
  const [modalData, setModalData] = useState(null);

  const openModal = (item) => {
    setModalData(item);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalData(null);
  };

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={noticias}
        ListHeaderComponent={
          <>
            <Text style={styles.title}>Principais Notícias</Text>
            <FlatList
              data={destinos}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 10 }}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <Card
                  title={item.title}
                  description={item.subtitle}
                  image={item.image}
                  onPress={() => openModal(item)} // Abre modal só nos cards horizontais
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
            onPress={() => navigation.navigate(item.navigateTo)} // Navegação normal nos cards verticais
          />
        )}
      />

      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {modalData && (
              <>
                <Image source={{ uri: modalData.image }} style={styles.modalImage} />
                <Text style={styles.modalTitle}>{modalData.title}</Text>
                <Text style={styles.modalSubtitle}>{modalData.subtitle}</Text>

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
    marginBottom: 10,
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
  },
  modalSubtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#00bcd4",
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 8,
  },
  closeButtonText: {
    color: "white",
    fontWeight: "bold",
  },
});

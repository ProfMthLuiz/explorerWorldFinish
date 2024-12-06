import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.8;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;
const SPACING = 20;

const stylesPaises = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0F0F0", // Fundo neutro para harmonizar com o layout
  },

  header: {
    width: "100%",
    height: "8%", // Altura reduzida para um cabeçalho mais compacto
    flexDirection: "row",
    zIndex: 10,
    alignItems: "center",
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },

  btnVoltar: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF", // Cor de botão mais harmoniosa com o cabeçalho
    width: 40,
    height: 40,
    borderRadius: 20,
  },

  bandeira: {
    top: "75%",
    right: "7%",
    borderRadius: 10,
  },

  svg: {
    position: "absolute",
    width: "100%",
    height: "15%",
    transform: [{ rotate: "180deg" }],
  },

  viewTitle: {
    height: "8%",
    top: "10%", // Ajuste para o título ficar abaixo do cabeçalho
    marginBottom: 10, // Espaço entre o título e a lista para melhor visualização
  },

  title: {
    fontFamily: "DisplayItalic",
    fontSize: 41,
    textAlign: "center",
    color: "#384554", // Cor de título para harmonizar com o fundo
    textShadowColor: "rgba(255, 255, 255, 0.75)",
    textShadowOffset: { width: -2, height: 2 },
    textShadowRadius: 4,
  },

  flatlist: {
    position: "relative",
    top: "20%",
  },

  flatlistItem: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    marginHorizontal: SPACING,
    overflow: "hidden",
    backgroundColor: "#384554",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10, // Bordas arredondadas nos itens da lista
    shadowColor: "#FFF",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
    elevation: 10, // Sombras para Android
  },

  flatlistImageContainer: {
    width: "90%",
    height: "80%",
    borderRadius: 10, // Bordas arredondadas nas imagens
    overflow: "hidden", // Oculta qualquer conteúdo que ultrapasse as bordas arredondadas
    shadowColor: "#FFF",
    shadowOffset: {
      width: 0,
      height: 15,
    },
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 10,
  },

  flatlistImage: {
    width: 300,
    height: 300,
  },

  flatlistTitle: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Display",
    marginTop: 8,
    textAlign: "center",
  },
});

export default stylesPaises;

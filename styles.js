import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  feed: {
    // marginTop: 52,
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    marginVertical: 20,
  },
  description: {
    margin: 16,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    //flex: 1,
  },
  cardHeader: {
    margin: 4,
    flexDirection: "row",
  },
  userName: {
    margin: 8,
    fontSize: 18,
    fontWeight: "600",
  },
});

export default styles;

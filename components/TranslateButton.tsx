import { View, Pressable, StyleSheet } from "react-native";
import Icons from "@expo/vector-icons/FontAwesome5";

export const TranslateButton = () => {
  return (
    <View>
      <Pressable
        style={({ pressed }) => [{ opacity: pressed ? 1 : 0.8 }, styles.button]}
      >
        <Icons name="arrow-circle-right" size={45} color="#88AB75" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
  },
});

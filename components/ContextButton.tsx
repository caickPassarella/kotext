import { View, Pressable, Text, StyleSheet } from "react-native";

type ContextButtonProps = {
  title: string;
  isPressed: boolean;
  onPress: () => void;
};
export const ContextButton = ({
  title,
  onPress,
  isPressed,
}: ContextButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, isPressed && styles.pressedButton]}
        onPress={onPress}
      >
        <Text style={[styles.text, isPressed && styles.pressedText]}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
  button: {
    gap: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    backgroundColor: "#ffffff",
    borderRadius: 6,
  },
  pressedButton: {
    backgroundColor: "#88AB75",
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  pressedText: {
    color: "#ffffff",
  },
});

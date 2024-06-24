import { useState } from "react";
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
        style={isPressed ? styles.pressedButton : styles.button}
        onPress={onPress}
      >
        <Text style={isPressed ? styles.pressedText : styles.text}>
          {title}
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
    borderRadius: 6,
  },
  pressedButton: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#88AB75",
    borderRadius: 6,
  },
  text: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
  },
  pressedText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
});

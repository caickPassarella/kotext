import { Pressable, StyleSheet, Text, View } from "react-native";
import { FontAwesome5 as Icons } from "@expo/vector-icons/";

type IconButtonProps = {
  name: keyof typeof Icons.glyphMap;
  size: number;
  color: string;
  background: boolean;
  text?: string;
  onPress: () => void;
};

export const IconButton = ({
  name,
  size,
  color,
  onPress,
  background,
  text,
}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed ? 1 : 0.8 },
        background === false ? null : styles.buttonBg,
      ]}
    >
      <View style={styles.buttonContentWrapper}>
        <Icons name={name} size={size} color={color} />
        {text ? <Text style={[styles.text]}>{text}</Text> : null}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  buttonBg: {
    backgroundColor: "#e6e6e6",
    borderRadius: 50,
    padding: 10,
  },
  text: {
    color: "#616161",
    fontSize: 16,
    fontWeight: "600",
    opacity: 1,
  },
  buttonContentWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
});

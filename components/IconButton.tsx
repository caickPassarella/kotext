import { Pressable } from "react-native";
import { FontAwesome5 as Icons } from "@expo/vector-icons/";

type IconButtonProps = {
  name: keyof typeof Icons.glyphMap;
  size: number;
  color: string;
  onPress: () => void;
};

export const IconButton = ({ name, size, color, onPress }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 1 : 0.7 }]}
    >
      <Icons name={name} size={size} color={color} />
    </Pressable>
  );
};

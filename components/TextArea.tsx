import { StyleSheet, TextInput } from "react-native";

type TextAreaProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
  fontSize: number;
};

export const TextArea = ({ text, setText, fontSize }: TextAreaProps) => {
  return (
    <TextInput
      style={[styles.input, { fontSize }]}
      onChangeText={setText}
      value={text}
      placeholder="Text to be translated"
      multiline
      placeholderTextColor={"#8e8e8e"}
      blurOnSubmit={true}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    maxHeight: 200,
    minHeight: 50,
    fontWeight: "400",
  },
});

import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

export const TextArea = () => {
  const [text, setText] = useState("");
  return (
    <TextInput
      style={styles.input}
      onChangeText={setText}
      value={text}
      placeholder="Text to be translated"
      multiline
      blurOnSubmit={true}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    maxHeight: 200,
    minHeight: 100,
    fontSize: 22,
    fontWeight: "400",
  },
});

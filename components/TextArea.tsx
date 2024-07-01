import { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

type TextAreaProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export const TextArea = ({ text, setText }: TextAreaProps) => {
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
    flex: 1,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    maxHeight: 200,
    minHeight: 100,
    fontSize: 22,
    fontWeight: "400",
  },
});

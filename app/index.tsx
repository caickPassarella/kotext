import { useState } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { TextArea } from "@/components/TextArea";
import { ContextButton } from "@/components/ContextButton";

export default function Index() {
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handlePress = (title: string) => {
    setActiveButton(title);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <TextArea />
          <View style={styles.buttons}>
            <ContextButton
              title="Keigo"
              onPress={() => handlePress("keigo")}
              isPressed={activeButton === "keigo"}
            />
            <ContextButton
              title="Formal"
              onPress={() => handlePress("formal")}
              isPressed={activeButton === "formal"}
            />
            <ContextButton
              title="Neutral"
              onPress={() => handlePress("neutral")}
              isPressed={activeButton === "neutral"}
            />
            <ContextButton
              title="Informal"
              onPress={() => handlePress("informal")}
              isPressed={activeButton === "informal"}
            />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignContent: "center",
  },
  buttons: {
    flexDirection: "row",
    paddingTop: 10,
    alignContent: "center",
    justifyContent: "center",
  },
});

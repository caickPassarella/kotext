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
import { IconButton } from "@/components/IconButton";

export default function Index() {
  const [activeButton, setActiveButton] = useState<string>("neutral");

  const handlePress = (title: string) => {
    setActiveButton(title);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.inputSectionWrapper}>
            <TextArea />
            <View style={styles.iconButtonWrapper}>
              <IconButton name="eraser" size={28} color={"#686868"} />
              <IconButton name="copy" size={28} color={"#686868"} />
            </View>
          </View>
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
          <View style={styles.translateButtonWrapper}>
            <IconButton name="arrow-circle-right" size={45} color={"#88AB75"} />
          </View>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    alignContent: "center",
  },
  buttons: {
    flexDirection: "row",
    paddingTop: 10,
    alignContent: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  inputSectionWrapper: {
    flexDirection: "row",
    gap: 10,
  },
  translateButtonWrapper: {
    marginTop: 20,
  },
  iconButtonWrapper: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

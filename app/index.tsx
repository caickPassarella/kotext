import { useState, useEffect } from "react";
import {
  View,
  TouchableWithoutFeedback,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  ActivityIndicator,
} from "react-native";
import { TextArea } from "@/components/TextArea";
import { ContextButton } from "@/components/ContextButton";
import { IconButton } from "@/components/IconButton";
import * as Clipboard from "expo-clipboard";
import * as Haptics from "expo-haptics";

import { translateText } from "@/services/translationApi";

export default function Index() {
  const [activeButton, setActiveButton] = useState<string>("neutral");
  const [translatedText, setTranslatedText] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [fontSize, setFontSize] = useState<number>(32);
  const [text, setText] = useState<string>("");

  const handlePress = (title: string) => {
    setActiveButton(title);
  };

  const handleDelete = () => {
    setText("");
    setTranslatedText("");
    setFontSize(32);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handlePaste = async () => {
    const pasteContent = await Clipboard.getStringAsync();
    setText(text.concat(pasteContent));
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
  };

  const handleTranslation = async () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setIsLoading(true);
    const response = await translateText(text, activeButton);
    if (response.success) {
      setTranslatedText(response.translation.Japanese);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const newFontSize = Math.max(18, 32 - Math.floor(text.length / 50) * 3);
    setFontSize(newFontSize);
  }, [text]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("@/assets/images/kotextLogoH.png")}
          />
        </View>
        <View style={styles.container}>
          <TextArea fontSize={fontSize} text={text} setText={setText} />
          <View style={styles.iconButtonWrapper}>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <IconButton
                background={true}
                name="copy"
                size={18}
                color={"#686868"}
                onPress={handlePaste}
                text="Paste"
              />
              {text ? (
                <IconButton
                  background={false}
                  name="times-circle"
                  size={20}
                  color={"#686868"}
                  onPress={handleDelete}
                />
              ) : null}
            </View>
            {text ? (
              <IconButton
                background={false}
                name="arrow-circle-right"
                size={40}
                color={"#4D8B6A"}
                onPress={handleTranslation}
              />
            ) : null}
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
          <View style={styles.translatedContainer}>
            {isLoading ? (
              <ActivityIndicator size="small" color="#4D8B6A" />
            ) : (
              <Text style={[styles.translatedOutput, { fontSize }]}>
                {translatedText}
              </Text>
            )}
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
    alignContent: "center",
    justifyContent: "space-between",
    gap: 10,
  },
  iconButtonWrapper: {
    flexDirection: "row",
    marginVertical: 12,
    justifyContent: "space-between",
  },
  logoContainer: {
    alignItems: "center",
    height: 40,
  },
  logo: {
    resizeMode: "contain",
    height: 40,
  },
  translateButton: {
    position: "absolute",
    right: 15,
  },
  translatedOutput: {
    fontWeight: "600",
    marginTop: 20,
    color: "#4D8B6A",
  },
  translatedContainer: {
    minHeight: 50,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

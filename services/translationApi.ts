import axios from "axios";

const API_URL = "http://192.168.15.3:3000/translate";

export const translateText = async (text: string, context: string) => {
  try {
    const response = await axios.post(
      API_URL,
      {
        text: text,
        context: context,
      },
      {
        headers: {
          "Content-Type": "application/json; charset=UTF-8",
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error("Failed to translate text");
    }
  } catch (error) {
    console.error("Error translating text: ", error);
    throw error;
  }
};

const OpenAI = require("openai");
const { openAIApiKey } = require("../config");

exports.translate = async (req, res) => {
  const { text, context } = req.body;

  const openai = new OpenAI({
    apiKey: openAIApiKey,
  });

  try {
    let prompt = generatePrompt(text, context);

    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
      response_format: { type: "json_object" },
    });
    console.log(completion.choices[0].message.content);
  } catch (error) {
    console.log(error);
  }
};

const generatePrompt = (text, context) => {
  switch (context) {
    case "keigo":
      return `Translate the following English text into Japanese using Keigo: ${text}`;
    case "formal":
      return `Translate the following English text into formal Japanese: ${text}`;
    case "informal":
      return `Translate the following English text into informal Japanese: ${text}`;
    default:
      return `Translate the following English text into neutral Japanese: ${text}`;
  }
};

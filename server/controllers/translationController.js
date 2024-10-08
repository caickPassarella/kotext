const OpenAI = require("openai");
const { openAIApiKey } = require("../config");

exports.translate = async (req, res) => {
  const { text, context } = req.body;

  const openai = new OpenAI({
    apiKey: openAIApiKey,
  });

  try {
    const prompt = generatePrompt(text, context);
    const systemPrompt =
      'You only respond in JSON. The Japanese translation must be in a key called "Japanese". Only reply with the translation, do not return in your response the original text or any other key or value besides the translation';

    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: prompt },
      ],
      model: "gpt-4o",
      response_format: { type: "json_object" },
      seed: 0,
      temperature: 0.2,
    });
    const translation = JSON.parse(completion.choices[0].message.content);
    translation.English = text;
    translation.context = context;
    res.json({ success: true, translation });
  } catch (error) {
    console.log("Translation error: ", error);
    res
      .status(500)
      .json({ success: false, message: "Failed to translate the text." });
  }
};

const generatePrompt = (text, context) => {
  switch (context) {
    case "keigo":
      return `Translate the following English text into Japanese using keigo: ${text}`;
    default:
      return `Translate the following English text into ${context} Japanese: ${text}`;
  }
};

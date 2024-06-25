const dotenv = require("dotenv");

dotenv.config();
module.exports = {
  openAIApiKey: process.env.OPENAI_API_KEY,
};

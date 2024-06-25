const translationRoutes = require("./routes/translation");

const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/translate", translationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

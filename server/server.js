const translationRoutes = require("./routes/translation");

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.options("*", cors());

app.use("/translate", translationRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require("express");
const app = express();
const sala = require("./src/newSala");

app.use(express.json({ extended: false }));

app.use("/sala", sala);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
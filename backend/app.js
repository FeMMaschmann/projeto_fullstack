const express = require("express");
const app = express();
const porta = 5000;
const bookRouter = require("./routes/books");
const authorRouter = require("./routes/authors");
const clientRouter = require("./routes/clients");
const withdrawalRouter = require("./routes/withdrawals");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", bookRouter);
app.use("/api/authors", authorRouter);
app.use("/api/clients", clientRouter);
app.use("/api/withdrawals", withdrawalRouter);

app.listen(porta, () => {
  console.log(`API executando na porta ${porta}`);
});
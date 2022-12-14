const express = require("express");
const app = express();
const porta = 5000;
const cors = require("cors");
const bodyParser = require("body-parser");
const bookRouter = require("./routes/books");
const authorRouter = require("./routes/authors");
const clientRouter = require("./routes/clients");
const withdrawalRouter = require("./routes/withdrawals");
const loginRouter = require("./routes/logins");

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/books", bookRouter);
app.use("/api/authors", authorRouter);
app.use("/api/clients", clientRouter);
app.use("/api/withdrawals", withdrawalRouter);
app.use("/api/logins", loginRouter);

app.listen(porta, () => {
  console.log(`API executando na porta ${porta}`);
});

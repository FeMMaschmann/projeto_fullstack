const { Client } = require("pg");

const conexao = {
  user: "postgres",
  password: "postgres",
  host: "127.0.0.1",
  port: 5432,
  database: "fullstack_projeto",
};

exports.getByEmailPass = (client, callback) => {
  const cliente = new Client(conexao);
  cliente.connect();

  const sql = "SELECT COUNT(*) FROM logins WHERE email = $1 and pass = $2";
  const values = [client.email, client.pass];

  cliente.query(sql, values, (err, result) => {
    if (err) {
      callback(err, undefined);
    } else {
      callback(undefined, result.rows[0]);
    }
    cliente.end();
  });
};

const database = require("../database/withdrawals");

exports.get = (req, res) => {
  database.get((err, withdrawalList) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      return res.json(withdrawalList);
    }
  });
};

exports.insert = (req, res) => {
  const withdrawal = req.body;
  database.insert(withdrawal, (err, insertedWithdrawal) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      return res.status(201).json(insertedWithdrawal);
    }
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;

  database.getById(id, (err, withdrawal) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (withdrawal) return res.json(withdrawal);
      else {
        return res.status(404).json({ erro: "Retirada nao encontrada" });
      }
    }
  });
};

exports.update = (req, res) => {
  const withdrawal = req.body;
  const id = req.params.id;

  database.update(id, withdrawal, (err, updatedWithdrawal) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (updatedWithdrawal) return res.json(updatedWithdrawal);
      else {
        return res.status(404).json({ erro: "Retirada nao encontrada" });
      }
    }
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  database.delete(id, (err, deletedWithdrawal) => {
    if (err) {
      return res.status(500).json({ erro: err });
    } else {
      if (deletedWithdrawal) return res.json(deletedWithdrawal);
      else {
        return res.status(404).json({ erro: "Retirada nao encontrada" });
      }
    }
  });
};

const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM Contrato', (err, contratos) => {
            if (err) {
                res.json(err);
            }
            res.json(contratos);
        });
    });
};

controller.edit = (req, res) => {
    const { IdContrato } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Contrato WHERE IdContrato = ?', [IdContrato], (err, contrato) => {
            res.json(contrato[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Contrato SET ?', [data], (err, contrato) => {
            res.json(contrato);
        });
    });
};

controller.update = (req, res) => {
    const { IdContrato } = req.params;
    const nuevo_contrato = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE Contrato SET ? WHERE IdContrato = ?', [nuevo_contrato, IdContrato], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdContrato } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Contrato WHERE IdContrato = ?', [IdContrato], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
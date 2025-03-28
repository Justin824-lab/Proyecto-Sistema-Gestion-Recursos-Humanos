const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM Tlaboral', (err, Tlaboral) => {
            if (err) {
                res.json(err);
            }
            res.json(Tlaboral);
        });
    });
};

controller.edit = (req, res) => {
    const { IdCargo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Tlaboral WHERE IdCargo = ?', [IdCargo], (err, Tlaboral) => {
            res.json(Tlaboral[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Tlaboral SET ?', [data], (err, Tlaboral) => {
            res.json(Tlaboral);
        });
    });
};

controller.update = (req, res) => {
    const { IdCargo } = req.params;
    const nuevo_Tlaboral = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE Tlaboral SET ? WHERE IdCargo = ?', [nuevo_Tlaboral, IdCargo], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdCargo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Tlaboral WHERE IdCargo = ?', [IdCargo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
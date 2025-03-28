const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM Plantilla', (err, Plantilla) => {
            if (err) {
                res.json(err);
            }
            res.json(Plantilla);
        });
    });
};

controller.edit = (req, res) => {
    const { IdCargo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Plantilla WHERE IdCargo = ?', [IdCargo], (err, Plantilla) => {
            res.json(Plantilla[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Plantilla SET ?', [data], (err, Plantilla) => {
            res.json(Plantilla);
        });
    });
};

controller.update = (req, res) => {
    const { IdCargo } = req.params;
    const nuevo_Plantilla = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE Plantilla SET ? WHERE IdCargo = ?', [nuevo_Plantilla, IdCargo], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdCargo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Plantilla WHERE IdCargo = ?', [IdCargo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
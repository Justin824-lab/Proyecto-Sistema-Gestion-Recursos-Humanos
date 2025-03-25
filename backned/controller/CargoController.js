const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM Cargo', (err, cargos) => {
            if (err) {
                res.json(err);
            }
            res.json(cargos);
        });
    });
};

controller.edit = (req, res) => {
    const { IdCargo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM Cargo WHERE IdCargo = ?', [IdCargo], (err, cargo) => {
            res.json(cargo[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Cargo SET ?', [data], (err, cargo) => {
            res.json(cargo);
        });
    });
};

controller.update = (req, res) => {
    const { IdCargo } = req.params;
    const nuevo_cargo = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE Cargo SET ? WHERE IdCargo = ?', [nuevo_cargo, IdCargo], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdCargo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM Cargo WHERE IdCargo = ?', [IdCargo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM CargoFunciones', (err, CargoFunciones) => {
            if (err) {
                res.json(err);
            }
            res.json(CargoFunciones);
        });
    });
};

controller.edit = (req, res) => {
    const { IdCargo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM CargoFunciones WHERE IdCargo = ?', [IdCargo], (err, CargoFunciones) => {
            res.json(CargoFunciones[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO CargoFunciones SET ?', [data], (err, CargoFunciones) => {
            res.json(CargoFunciones);
        });
    });
};

controller.update = (req, res) => {
    const { IdCargo } = req.params;
    const nuevo_CargoFunciones = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE CargoFunciones SET ? WHERE IdCargo = ?', [nuevo_CargoFunciones, IdCargo], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdCargo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM CargoFunciones WHERE IdCargo = ?', [IdCargo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
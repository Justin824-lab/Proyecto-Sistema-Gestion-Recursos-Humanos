const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM CargoRequisitos', (err, CargoRequisitos) => {
            if (err) {
                res.json(err);
            }
            res.json(CargoRequisitos);
        });
    });
};

controller.edit = (req, res) => {
    const { IdCargo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM CargoRequisitos WHERE IdCargo = ?', [IdCargo], (err, CargoRequisitos) => {
            res.json(CargoRequisitos[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO CargoRequisitos SET ?', [data], (err, CargoRequisitos) => {
            res.json(CargoRequisitos);
        });
    });
};

controller.update = (req, res) => {
    const { IdCargo } = req.params;
    const nuevo_CargoRequisitos = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE CargoRequisitos SET ? WHERE IdCargo = ?', [nuevo_CargoRequisitos, IdCargo], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdCargo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM CargoRequisitos WHERE IdCargo = ?', [IdCargo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
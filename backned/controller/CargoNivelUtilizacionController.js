const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM CargoNivelUtilizacion', (err, CargoNivelUtilizacion) => {
            if (err) {
                res.json(err);
            }
            res.json(CargoNivelUtilizacion);
        });
    });
};

controller.edit = (req, res) => {
    const { IdCargo } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM CargoNivelUtilizacion WHERE IdCargo = ?', [IdCargo], (err, CargoNivelUtilizacion) => {
            res.json(CargoNivelUtilizacion[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO CargoNivelUtilizacion SET ?', [data], (err, CargoNivelUtilizacion) => {
            res.json(CargoNivelUtilizacion);
        });
    });
};

controller.update = (req, res) => {
    const { IdCargo } = req.params;
    const nuevo_CargoNivelUtilizacion = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE CargoNivelUtilizacion SET ? WHERE IdCargo = ?', [nuevo_CargoNivelUtilizacion, IdCargo], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdCargo } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM CargoNivelUtilizacion WHERE IdCargo = ?', [IdCargo], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
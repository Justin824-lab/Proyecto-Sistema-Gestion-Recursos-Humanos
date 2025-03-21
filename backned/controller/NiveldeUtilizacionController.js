const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM NiveldeUtilizacion', (err, NiveldeUtilizacion) => {
            if (err) {
                res.json(err);
            }
            res.json(NiveldeUtilizacion);
        });
    });
};

controller.edit = (req, res) => {
    const { IdNivelUtilizacion } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM NiveldeUtilizacion WHERE IdNivelUtilizacion = ?', [IdNivelUtilizacion], (err, nivel) => {
            res.json(nivel[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO NiveldeUtilizacion SET ?', [data], (err, nivel) => {
            res.json(nivel);
        });
    });
};

controller.update = (req, res) => {
    const { IdNivelUtilizacion } = req.params;
    const nuevo_nivel = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE NiveldeUtilizacion SET ? WHERE IdNivelUtilizacion = ?', [nuevo_nivel, IdNivelUtilizacion], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdNivelUtilizacion } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM NiveldeUtilizacion WHERE IdNivelUtilizacion = ?', [IdNivelUtilizacion], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
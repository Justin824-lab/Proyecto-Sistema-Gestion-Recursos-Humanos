const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM OtrosPagos', (err, otrosPagos) => {
            if (err) {
                res.json(err);
            }
            res.json(otrosPagos);
        });
    });
};

controller.edit = (req, res) => {
    const { IdPagos } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM OtrosPagos WHERE IdPagos = ?', [IdPagos], (err, otroPago) => {
            res.json(otroPago[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO OtrosPagos SET ?', [data], (err, otroPago) => {
            res.json(otroPago);
        });
    });
};

controller.update = (req, res) => {
    const { IdPagos } = req.params;
    const nuevo_otroPago = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE OtrosPagos SET ? WHERE IdPagos = ?', [nuevo_otroPago, IdPagos], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdPagos } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM OtrosPagos WHERE IdPagos = ?', [IdPagos], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
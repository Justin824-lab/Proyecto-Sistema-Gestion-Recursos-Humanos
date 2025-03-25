const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM NoResolucion', (err, noResoluciones) => {
            if (err) {
                res.json(err);
            }
            res.json(noResoluciones);
        });
    });
};

controller.edit = (req, res) => {
    const { IdNoResolucion } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM NoResolucion WHERE IdNoResolucion = ?', [IdNoResolucion], (err, noResolucion) => {
            res.json(noResolucion[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO NoResolucion SET ?', [data], (err, noResolucion) => {
            res.json(noResolucion);
        });
    });
};

controller.update = (req, res) => {
    const { IdNoResolucion } = req.params;
    const nuevo_noResolucion = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE NoResolucion SET ? WHERE IdNoResolucion = ?', [nuevo_noResolucion, IdNoResolucion], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdNoResolucion } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM NoResolucion WHERE IdNoResolucion = ?', [IdNoResolucion], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;
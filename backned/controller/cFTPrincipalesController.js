const controller = {};

controller.list = (req, res) => {
    req.getConnection((error, conn) => {
        conn.query('SELECT * FROM cFTPrincipales', (err, cFTPrincipales) => {
            if (err) {
                res.json(err);
            }
            res.json(cFTPrincipales);
        });
    });
};

controller.edit = (req, res) => {
    const { IdFTPrincipales } = req.params;

    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cFTPrincipales WHERE IdFTPrincipales = ?', [IdFTPrincipales], (err, cFTPrincipal) => {
            res.json(cFTPrincipal[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cFTPrincipales SET ?', [data], (err, cFTPrincipal) => {
            res.json(cFTPrincipal);
        });
    });
};

controller.update = (req, res) => {
    const { IdFTPrincipales } = req.params;
    const nuevo_cFTPrincipal = req.body;

    req.getConnection((err, conn) => {
        conn.query('UPDATE cFTPrincipales SET ? WHERE IdFTPrincipales = ?', [nuevo_cFTPrincipal, IdFTPrincipales], (err, rows) => { 
            res.json({ message: "Registro Actualizado" }); 
        });
    });
};

controller.delete = (req, res) => {
    const { IdFTPrincipales } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM cFTPrincipales WHERE IdFTPrincipales = ?', [IdFTPrincipales], (err, rows) => {
            res.json({ message: "Registro Eliminado" });
        });
    });
};

module.exports = controller;